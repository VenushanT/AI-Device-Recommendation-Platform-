import { RecommendationRequest, AIRecommendation, Device } from '@/types'

class GeminiAI {
  private apiKey: string
  private baseUrl: string = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent'

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async getRecommendations(
    request: RecommendationRequest,
    availableDevices: Device[]
  ): Promise<AIRecommendation[]> {
    // Check if API key is properly configured
    if (!this.apiKey || 
        this.apiKey.includes('your_') || 
        this.apiKey === 'invalid_key' || 
        this.apiKey === 'expired_key_using_fallback' ||
        this.apiKey.length < 30) {
      console.warn('Gemini API key not configured, using fallback recommendations')
      return this.getFallbackRecommendations(request, availableDevices)
    }

    try {
      const prompt = this.buildPrompt(request, availableDevices)
      
      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.2, // Lower temperature for more consistent responses
            topK: 20,        // More focused responses
            topP: 0.8,       // Balanced creativity vs accuracy
            maxOutputTokens: 2000, // Increased for detailed responses
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH", 
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error(`Gemini API error: ${response.status} - ${errorText}`)
        throw new Error(`Gemini API error: ${response.status}`)
      }

      const data = await response.json()
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text

      if (!aiResponse) {
        console.error('No response content from Gemini API')
        throw new Error('No response from AI')
      }

      console.log('Gemini AI Response:', aiResponse) // Debug log
      
      const recommendations = this.parseAIResponse(aiResponse, availableDevices)
      
      // If parsing failed, use fallback
      if (recommendations.length === 0) {
        console.warn('AI response parsing failed, using fallback')
        return this.getFallbackRecommendations(request, availableDevices)
      }
      
      return recommendations
    } catch (error) {
      console.error('Error getting Gemini AI recommendations:', error)
      // Fallback to smart local recommendations
      return this.getFallbackRecommendations(request, availableDevices)
    }
  }

  private buildPrompt(request: RecommendationRequest, devices: Device[]): string {
    const categoryDevices = devices.filter(d => d.category === request.category)
    const deviceList = categoryDevices
      .map(d => {
        const specs = Object.entries(d.specs || {})
          .map(([key, value]) => `${key}: ${value}`)
          .slice(0, 3)
          .join(', ')
        
        return `- ${d.name} by ${d.brand}
  Price: $${d.price}
  Rating: ${d.rating}/5 stars
  Subcategory: ${d.subcategory}
  Key Specs: ${specs}
  Top Features: ${d.features.slice(0, 4).join(', ')}
  Description: ${d.description}`
      })
      .join('\n\n')

    const budgetText = request.budget && request.budget.max > 0 
      ? `$${request.budget.min} - $${request.budget.max}` 
      : 'No specific budget constraint'

    const usageKeywords = this.extractUsageKeywords(request.usage)

    return `You are a professional device recommendation expert with deep knowledge of technology products. Your goal is to provide the most accurate and helpful recommendations based on specific user needs.

DETAILED USER PROFILE:
- Device Category: ${request.category}
- Budget Range: ${budgetText}
- Primary Usage: ${request.usage}
- Experience Level: ${request.experience}
- Additional Preferences: ${request.preferences.length > 0 ? request.preferences.join(', ') : 'None specified'}
- Usage Keywords: ${usageKeywords.join(', ')}

AVAILABLE DEVICES IN ${request.category.toUpperCase()} CATEGORY:
${deviceList}

ANALYSIS REQUIREMENTS:
1. BUDGET COMPLIANCE: Prioritize devices within budget range. If recommending above budget, clearly justify why.
2. USAGE ALIGNMENT: Match device capabilities with specific usage requirements (${request.usage}).
3. EXPERIENCE MATCHING: Consider user's technical expertise (${request.experience}).
4. VALUE ASSESSMENT: Evaluate price-to-performance ratio and long-term value.
5. REAL-WORLD CONSIDERATIONS: Include practical pros and cons users actually care about.

SCORING CRITERIA (0-100):
- Budget fit: 25 points
- Usage suitability: 30 points
- Specs & performance: 25 points
- Value for money: 20 points

RESPONSE FORMAT (STRICT JSON):
[
  {
    "deviceName": "EXACT device name from list above",
    "score": 92,
    "reasoning": "Detailed explanation addressing budget, usage, and user experience level. Explain why this is the BEST choice for their specific needs.",
    "pros": ["Budget-friendly at $X", "Perfect for [specific usage]", "User-friendly for [experience level]"],
    "cons": ["Realistic limitation 1", "Honest drawback 2"]
  },
  {
    "deviceName": "Second EXACT device name",
    "score": 85,
    "reasoning": "Why this is the second-best option, comparing to the first choice.",
    "pros": ["Specific benefit 1", "Specific benefit 2", "Specific benefit 3"],
    "cons": ["Real limitation 1", "Real limitation 2"]
  },
  {
    "deviceName": "Third EXACT device name",
    "score": 78,
    "reasoning": "Why this rounds out the top 3, what unique value it offers.",
    "pros": ["Unique advantage 1", "Unique advantage 2", "Unique advantage 3"],
    "cons": ["Honest limitation 1", "Honest limitation 2"]
  }
]

CRITICAL: Only respond with the JSON array. Use EXACT device names from the list. Be honest about limitations.`
  }

  private extractUsageKeywords(usage: string): string[] {
    const keywords: string[] = []
    const usageLower = usage.toLowerCase()
    
    // Performance requirements
    if (usageLower.includes('gaming') || usageLower.includes('game')) {
      keywords.push('high-performance', 'gaming', 'graphics-intensive')
    }
    if (usageLower.includes('coding') || usageLower.includes('programming') || usageLower.includes('development')) {
      keywords.push('productivity', 'multitasking', 'coding-friendly')
    }
    if (usageLower.includes('video editing') || usageLower.includes('editing')) {
      keywords.push('creative-work', 'high-performance', 'storage-intensive')
    }
    if (usageLower.includes('design') || usageLower.includes('creative')) {
      keywords.push('creative-work', 'display-quality', 'color-accurate')
    }
    
    // Usage patterns
    if (usageLower.includes('portable') || usageLower.includes('travel')) {
      keywords.push('portable', 'battery-life', 'lightweight')
    }
    if (usageLower.includes('work') || usageLower.includes('business')) {
      keywords.push('professional', 'reliable', 'business-grade')
    }
    if (usageLower.includes('casual') || usageLower.includes('basic')) {
      keywords.push('basic-use', 'budget-friendly', 'simple')
    }
    if (usageLower.includes('streaming') || usageLower.includes('media')) {
      keywords.push('media-consumption', 'display-quality', 'audio-quality')
    }
    
    return keywords.length > 0 ? keywords : ['general-purpose']
  }

  private parseAIResponse(response: string, devices: Device[]): AIRecommendation[] {
    try {
      console.log('Raw Gemini Response:', response) // Debug log
      
      // Clean up the response more aggressively
      let jsonStr = response.trim()
      
      // Remove markdown code blocks if present
      jsonStr = jsonStr.replace(/```json\s*/g, '').replace(/```\s*/g, '')
      
      // Remove any text before the first [ and after the last ]
      const startIndex = jsonStr.indexOf('[')
      const endIndex = jsonStr.lastIndexOf(']')
      
      if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
        jsonStr = jsonStr.substring(startIndex, endIndex + 1)
      } else {
        // If no array found, try to find objects and wrap them
        const objectMatches = jsonStr.match(/\{[\s\S]*?\}/g)
        if (objectMatches && objectMatches.length > 0) {
          jsonStr = `[${objectMatches.join(',')}]`
        }
      }

      // Fix common JSON formatting issues
      jsonStr = jsonStr
        .replace(/\n/g, ' ') // Replace newlines with spaces
        .replace(/\r/g, '') // Remove carriage returns
        .replace(/\t/g, ' ') // Replace tabs with spaces
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .replace(/,\s*([}\]])/g, '$1') // Remove trailing commas
        .trim()

      console.log('Cleaned JSON String:', jsonStr) // Debug log
      
      const recommendations = JSON.parse(jsonStr)
      
      // Ensure it's an array
      const recArray = Array.isArray(recommendations) ? recommendations : [recommendations]
      
      // Enhanced device matching with better scoring
      return recArray.map((rec: any, index: number) => {
        // More flexible device matching
        const device = devices.find(d => {
          const deviceNameLower = d.name.toLowerCase()
          const recNameLower = (rec.deviceName || rec.name || '').toLowerCase()
          
          // Exact match first
          if (deviceNameLower === recNameLower) return true
          
          // Partial match
          if (deviceNameLower.includes(recNameLower) || recNameLower.includes(deviceNameLower)) return true
          
          // Remove special characters and try again
          const cleanDevice = deviceNameLower.replace(/[^a-z0-9]/g, '')
          const cleanRec = recNameLower.replace(/[^a-z0-9]/g, '')
          
          return cleanDevice.includes(cleanRec) || cleanRec.includes(cleanDevice)
        })
        
        if (!device) {
          console.warn('Device not found for recommendation:', rec.deviceName || rec.name)
          return null
        }

        // Validate and adjust score based on actual criteria
        let adjustedScore = rec.score || rec.matchScore || 80
        
        // Cap unrealistic scores
        if (adjustedScore > 100) adjustedScore = 95
        if (adjustedScore < 0) adjustedScore = 50
        
        // Apply small penalty for each subsequent recommendation
        adjustedScore = Math.max(adjustedScore - (index * 3), 40)

        return {
          device,
          score: Math.round(adjustedScore),
          reasoning: rec.reasoning || rec.reason || rec.description || 'Recommended based on your requirements and budget.',
          pros: Array.isArray(rec.pros) ? rec.pros : (rec.advantages || rec.benefits || device.features.slice(0, 3)),
          cons: Array.isArray(rec.cons) ? rec.cons : (rec.disadvantages || rec.drawbacks || ['Consider your specific needs', 'Check compatibility with your workflow'])
        }
      }).filter(Boolean) as AIRecommendation[]
    } catch (error) {
      console.error('Error parsing Gemini response:', error)
      console.error('Response was:', response)
      return []
    }
  }

  private getFallbackRecommendations(
    request: RecommendationRequest,
    devices: Device[]
  ): AIRecommendation[] {
    console.log('Using intelligent fallback recommendations')
    
    let filtered = devices.filter(d => d.category === request.category)
    
    // Apply budget filter more intelligently
    if (request.budget && request.budget.max > 0) {
      const withinBudget = filtered.filter(d => 
        d.price >= request.budget!.min && d.price <= request.budget!.max
      )
      
      // If no devices within budget, include devices slightly above budget
      if (withinBudget.length === 0) {
        const nearBudget = filtered.filter(d => 
          d.price <= request.budget!.max * 1.3 // 30% over budget tolerance
        )
        filtered = nearBudget.length > 0 ? nearBudget : filtered
      } else {
        filtered = withinBudget
      }
    }
    
    // Score devices based on multiple criteria
    const scoredDevices = filtered.map(device => {
      let score = 0
      
      // Rating score (0-30 points)
      score += device.rating * 6
      
      // Budget fit score (0-25 points)
      if (request.budget && request.budget.max > 0) {
        if (device.price <= request.budget.max) {
          score += 25 - ((device.price - request.budget.min) / (request.budget.max - request.budget.min)) * 10
        } else {
          // Penalty for being over budget
          const overBudgetRatio = (device.price - request.budget.max) / request.budget.max
          score -= overBudgetRatio * 20
        }
      } else {
        score += 20 // No budget constraint bonus
      }
      
      // Usage alignment score (0-30 points)
      const usageScore = this.calculateUsageScore(device, request.usage)
      score += usageScore
      
      // Experience level match (0-15 points)
      const expScore = this.calculateExperienceScore(device, request.experience)
      score += expScore
      
      return { device, calculatedScore: Math.max(Math.min(score, 100), 40) }
    })
    
    // Sort by calculated score and take top 3
    const topDevices = scoredDevices
      .sort((a, b) => b.calculatedScore - a.calculatedScore)
      .slice(0, 3)

    return topDevices.map((item, index) => {
      const usageReasons = this.getUsageBasedReasoning(item.device, request.usage)
      const experienceReasons = this.getExperienceBasedReasoning(item.device, request.experience)
      const budgetReasons = this.getBudgetBasedReasoning(item.device, request.budget)
      
      return {
        device: item.device,
        score: Math.round(item.calculatedScore),
        reasoning: `${budgetReasons} ${usageReasons} ${experienceReasons} This device offers excellent value with a ${item.device.rating}/5 star rating from users.`,
        pros: this.getSmartPros(item.device, request),
        cons: this.getSmartCons(item.device, request)
      }
    })
  }

  private calculateUsageScore(device: Device, usage: string): number {
    const usageLower = usage.toLowerCase()
    let score = 15 // Base score
    
    // Gaming usage
    if (usageLower.includes('gaming') || usageLower.includes('game')) {
      if (device.subcategory === 'gaming') score += 15
      if (device.features.some(f => f.toLowerCase().includes('performance') || f.toLowerCase().includes('rtx') || f.toLowerCase().includes('fps'))) score += 10
    }
    
    // Professional/Work usage
    if (usageLower.includes('work') || usageLower.includes('business') || usageLower.includes('professional')) {
      if (device.subcategory === 'workstation' || device.subcategory === 'business') score += 15
      if (device.features.some(f => f.toLowerCase().includes('professional') || f.toLowerCase().includes('productivity'))) score += 10
    }
    
    // Coding/Development
    if (usageLower.includes('coding') || usageLower.includes('programming') || usageLower.includes('development')) {
      if (device.specs && (device.specs.ram?.includes('16GB') || device.specs.ram?.includes('32GB'))) score += 10
      if (device.specs && device.specs.processor?.toLowerCase().includes('pro')) score += 5
    }
    
    // Creative work
    if (usageLower.includes('design') || usageLower.includes('creative') || usageLower.includes('editing')) {
      if (device.features.some(f => f.toLowerCase().includes('display') || f.toLowerCase().includes('color') || f.toLowerCase().includes('creative'))) score += 10
    }
    
    return Math.min(score, 30)
  }

  private calculateExperienceScore(device: Device, experience: string): number {
    switch (experience) {
      case 'beginner':
        // Prefer simpler, more user-friendly devices
        if (device.brand === 'Apple') return 15 // Apple devices are generally user-friendly
        if (device.price < 1000) return 12 // More affordable options for beginners
        return 8
      case 'advanced':
        // Prefer high-performance, feature-rich devices
        if (device.subcategory === 'workstation' || device.subcategory === 'gaming') return 15
        if (device.price > 1500) return 12 // Advanced users might want premium features
        return 10
      default: // intermediate
        return 12 // Balanced score for intermediate users
    }
  }

  private getBudgetBasedReasoning(device: Device, budget?: { min: number; max: number }): string {
    if (!budget || budget.max === 0) {
      return `At $${device.price}, this offers excellent value for its feature set.`
    }
    
    if (device.price <= budget.max) {
      if (device.price <= budget.min + (budget.max - budget.min) * 0.3) {
        return `Great budget choice at $${device.price}, leaving room for accessories.`
      } else {
        return `Perfectly priced at $${device.price} within your ${budget.min}-${budget.max} budget.`
      }
    } else {
      const overAmount = device.price - budget.max
      return `At $${device.price}, it's $${overAmount} over budget but offers premium features that justify the cost.`
    }
  }

  private getSmartPros(device: Device, request: RecommendationRequest): string[] {
    const pros: string[] = []
    
    // Budget-related pros
    if (request.budget && device.price <= request.budget.max) {
      pros.push(`Within budget at $${device.price}`)
    } else if (!request.budget || request.budget.max === 0) {
      pros.push(`Excellent value at $${device.price}`)
    }
    
    // Rating-based pros
    if (device.rating >= 4.7) {
      pros.push(`Highly rated (${device.rating}/5 stars)`)
    } else if (device.rating >= 4.5) {
      pros.push(`Well-reviewed (${device.rating}/5 stars)`)
    }
    
    // Feature-based pros (limit to 2 most relevant)
    const relevantFeatures = device.features.filter(feature => {
      const usageLower = request.usage.toLowerCase()
      const featureLower = feature.toLowerCase()
      
      if (usageLower.includes('gaming') && (featureLower.includes('gaming') || featureLower.includes('performance') || featureLower.includes('hz'))) return true
      if (usageLower.includes('work') && (featureLower.includes('professional') || featureLower.includes('productivity'))) return true
      if (usageLower.includes('creative') && (featureLower.includes('display') || featureLower.includes('color'))) return true
      
      return false
    }).slice(0, 2)
    
    pros.push(...relevantFeatures)
    
    // Fill remaining spots with top device features if needed
    while (pros.length < 3) {
      const remainingFeatures = device.features.filter(f => !pros.includes(f))
      if (remainingFeatures.length > 0) {
        pros.push(remainingFeatures[0])
      } else {
        break
      }
    }
    
    return pros.slice(0, 3)
  }

  private getSmartCons(device: Device, request: RecommendationRequest): string[] {
    const cons: string[] = []
    
    // Budget-related cons
    if (request.budget && device.price > request.budget.max) {
      const overAmount = device.price - request.budget.max
      cons.push(`Over budget by $${overAmount}`)
    }
    
    // Experience level mismatch
    if (request.experience === 'beginner' && device.price > 2000) {
      cons.push('Might be complex for beginners')
    }
    
    // Category-specific cons
    if (device.category === 'laptop' && device.subcategory === 'gaming') {
      cons.push('Gaming laptops typically have shorter battery life')
    }
    
    if (device.category === 'mobile' && device.price > 1000) {
      cons.push('Premium pricing for flagship features')
    }
    
    // Generic cons if none found
    if (cons.length === 0) {
      cons.push('Consider compatibility with your existing setup')
    }
    
    // Add a second con if only one
    if (cons.length === 1) {
      if (device.rating < 4.5) {
        cons.push('Mixed user reviews')
      } else {
        cons.push('Popular model may have limited availability')
      }
    }
    
    return cons.slice(0, 2)
  }

  private getUsageBasedReasoning(device: Device, usage: string): string {
    const usageLower = usage.toLowerCase()
    
    if (usageLower.includes('gaming')) {
      return `Excellent for gaming with ${device.features.find(f => f.toLowerCase().includes('performance') || f.toLowerCase().includes('speed')) || 'high-performance specs'}.`
    }
    if (usageLower.includes('work') || usageLower.includes('business')) {
      return `Great for professional work with reliable performance and business-grade features.`
    }
    if (usageLower.includes('creative') || usageLower.includes('design')) {
      return `Suitable for creative work with advanced capabilities for demanding tasks.`
    }
    return `Perfect for your ${usage.toLowerCase()} needs with versatile functionality.`
  }

  private getExperienceBasedReasoning(device: Device, experience: string): string {
    switch (experience) {
      case 'beginner':
        return 'User-friendly and easy to set up for newcomers.'
      case 'advanced':
        return 'Advanced features for experienced users who want full control.'
      default:
        return 'Balanced features suitable for intermediate users.'
    }
  }

  private getDeviceCons(device: Device, request: RecommendationRequest): string[] {
    const cons: string[] = []
    
    if (request.budget && device.price > request.budget.max * 0.8) {
      cons.push('Higher price point')
    }
    
    if (device.category === 'laptop' && device.subcategory === 'gaming') {
      cons.push('May have shorter battery life')
    }
    
    if (device.category === 'mobile' && device.subcategory === 'flagship') {
      cons.push('Premium pricing')
    }
    
    if (cons.length === 0) {
      cons.push('Consider specific feature requirements')
    }
    
    return cons
  }
}

export default GeminiAI