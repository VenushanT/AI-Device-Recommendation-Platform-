import { RecommendationRequest, AIRecommendation, Device } from '@/types'

class GeminiAI {
  private apiKey: string
  private baseUrl: string = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent'

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async getRecommendations(
    request: RecommendationRequest,
    availableDevices: Device[]
  ): Promise<AIRecommendation[]> {
    // Check if API key is properly configured
    if (!this.apiKey || this.apiKey.includes('your_') || this.apiKey === 'invalid_key') {
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
            temperature: 0.3,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1000,
          }
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
      .map(d => `- ${d.name} by ${d.brand} - $${d.price} - Rating: ${d.rating}/5 - Features: ${d.features.slice(0, 3).join(', ')}`)
      .join('\n')

    const budgetText = request.budget && request.budget.max > 0 
      ? `$${request.budget.min} - $${request.budget.max}` 
      : 'No specific budget'

    return `You are an expert device recommendation assistant. Analyze these user requirements and recommend exactly 3 devices that best match their needs.

USER REQUIREMENTS:
- Category: ${request.category}
- Budget Range: ${budgetText}
- Usage: ${request.usage}
- Experience Level: ${request.experience}
- Preferences: ${request.preferences.length > 0 ? request.preferences.join(', ') : 'None specified'}

AVAILABLE DEVICES:
${deviceList}

INSTRUCTIONS:
1. Analyze the user's requirements carefully
2. Consider budget constraints, usage patterns, and experience level
3. Recommend exactly 3 devices from the list above
4. Provide clear reasoning for each recommendation
5. Include specific pros and cons

RESPONSE FORMAT:
Respond with valid JSON only in this exact format:
[
  {
    "deviceName": "Exact device name from the list above",
    "score": 85,
    "reasoning": "Clear explanation why this device perfectly fits the user's specific needs and usage requirements",
    "pros": ["Specific advantage 1", "Specific advantage 2", "Specific advantage 3"],
    "cons": ["Potential limitation 1", "Potential limitation 2"]
  },
  {
    "deviceName": "Second device name",
    "score": 78,
    "reasoning": "Explanation for second recommendation",
    "pros": ["Pro 1", "Pro 2", "Pro 3"],
    "cons": ["Con 1", "Con 2"]
  },
  {
    "deviceName": "Third device name", 
    "score": 72,
    "reasoning": "Explanation for third recommendation",
    "pros": ["Pro 1", "Pro 2", "Pro 3"],
    "cons": ["Con 1", "Con 2"]
  }
]

Important: Respond with ONLY the JSON array, no additional text or formatting.`
  }

  private parseAIResponse(response: string, devices: Device[]): AIRecommendation[] {
    try {
      console.log('Raw Gemini Response:', response) // Debug log
      
      // Clean up the response
      let jsonStr = response.trim()
      
      // Remove markdown code blocks if present
      jsonStr = jsonStr.replace(/```json\s*/g, '').replace(/```\s*/g, '')
      
      // Find JSON array in the response
      const jsonMatch = jsonStr.match(/\[[\s\S]*?\]/);
      if (jsonMatch) {
        jsonStr = jsonMatch[0]
      } else {
        // If no array found, try to find objects and wrap them
        const objectMatches = jsonStr.match(/\{[\s\S]*?\}/g)
        if (objectMatches && objectMatches.length > 0) {
          jsonStr = `[${objectMatches.join(',')}]`
        }
      }

      console.log('Cleaned JSON String:', jsonStr) // Debug log
      
      const recommendations = JSON.parse(jsonStr)
      
      // Ensure it's an array
      const recArray = Array.isArray(recommendations) ? recommendations : [recommendations]
      
      return recArray.map((rec: any) => {
        // Flexible device matching
        const device = devices.find(d => {
          const deviceNameLower = d.name.toLowerCase()
          const recNameLower = (rec.deviceName || rec.name || '').toLowerCase()
          
          return deviceNameLower.includes(recNameLower) || 
                 recNameLower.includes(deviceNameLower) ||
                 deviceNameLower.replace(/[^a-z0-9]/g, '').includes(recNameLower.replace(/[^a-z0-9]/g, ''))
        })
        
        if (!device) {
          console.warn('Device not found for recommendation:', rec.deviceName || rec.name)
          return null
        }

        return {
          device,
          score: rec.score || rec.matchScore || 80,
          reasoning: rec.reasoning || rec.reason || rec.description || 'Recommended based on your requirements',
          pros: rec.pros || rec.advantages || rec.benefits || device.features.slice(0, 3),
          cons: rec.cons || rec.disadvantages || rec.drawbacks || ['Consider your specific needs']
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
    console.log('Using smart fallback recommendations')
    
    let filtered = devices.filter(d => d.category === request.category)
    
    // Apply budget filter if specified
    if (request.budget && request.budget.max > 0) {
      filtered = filtered.filter(d => 
        d.price >= request.budget!.min && d.price <= request.budget!.max
      )
    }
    
    // Sort by rating and take top 3
    const topDevices = filtered
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3)

    return topDevices.map((device, index) => {
      const usageReasons = this.getUsageBasedReasoning(device, request.usage)
      const experienceReasons = this.getExperienceBasedReasoning(device, request.experience)
      
      return {
        device,
        score: Math.floor(device.rating * 20) - (index * 5),
        reasoning: `${usageReasons} ${experienceReasons} Highly rated with ${device.rating}/5 stars.`,
        pros: device.features.slice(0, 3),
        cons: this.getDeviceCons(device, request)
      }
    })
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