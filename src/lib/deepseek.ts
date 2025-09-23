import { RecommendationRequest, AIRecommendation, Device } from '@/types'

class DeepseekAI {
  private apiKey: string
  private baseUrl: string = 'https://api.deepseek.com/v1'

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async getRecommendations(
    request: RecommendationRequest,
    availableDevices: Device[]
  ): Promise<AIRecommendation[]> {
    try {
      const prompt = this.buildPrompt(request, availableDevices)
      
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: 'You are an expert device recommendation assistant. Analyze user requirements and recommend the best devices with detailed reasoning.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 2000,
          temperature: 0.7
        })
      })

      if (!response.ok) {
        throw new Error(`Deepseek API error: ${response.statusText}`)
      }

      const data = await response.json()
      const aiResponse = data.choices[0]?.message?.content

      if (!aiResponse) {
        throw new Error('No response from AI')
      }

      return this.parseAIResponse(aiResponse, availableDevices)
    } catch (error) {
      console.error('Error getting AI recommendations:', error)
      // Fallback to basic filtering
      return this.getFallbackRecommendations(request, availableDevices)
    }
  }

  private buildPrompt(request: RecommendationRequest, devices: Device[]): string {
    const deviceList = devices
      .filter(d => d.category === request.category)
      .map(d => `${d.name} (${d.brand}) - $${d.price} - Rating: ${d.rating}/5`)
      .join('\n')

    return `
User Requirements:
- Category: ${request.category}
- Budget: ${request.budget ? `$${request.budget.min} - $${request.budget.max}` : 'No specific budget'}
- Preferences: ${request.preferences.join(', ')}
- Usage: ${request.usage}
- Experience Level: ${request.experience}

Available Devices:
${deviceList}

Please recommend the top 3 devices that best match the user's requirements. For each recommendation, provide:
1. Device name and reasoning for recommendation
2. Match score (0-100)
3. Pros and cons
4. Why it fits their specific needs

Format your response as JSON array with this structure:
[
  {
    "deviceName": "Device Name",
    "score": 85,
    "reasoning": "Why this device is recommended",
    "pros": ["Pro 1", "Pro 2"],
    "cons": ["Con 1", "Con 2"]
  }
]
    `
  }

  private parseAIResponse(response: string, devices: Device[]): AIRecommendation[] {
    try {
      // Extract JSON from response
      const jsonMatch = response.match(/\[[\s\S]*\]/)
      if (!jsonMatch) {
        throw new Error('No JSON found in response')
      }

      const recommendations = JSON.parse(jsonMatch[0])
      
      return recommendations.map((rec: any) => {
        const device = devices.find(d => 
          d.name.toLowerCase().includes(rec.deviceName.toLowerCase()) ||
          rec.deviceName.toLowerCase().includes(d.name.toLowerCase())
        )
        
        if (!device) {
          return null
        }

        return {
          device,
          score: rec.score || 80,
          reasoning: rec.reasoning || 'Recommended based on your requirements',
          pros: rec.pros || [],
          cons: rec.cons || []
        }
      }).filter(Boolean) as AIRecommendation[]
    } catch (error) {
      console.error('Error parsing AI response:', error)
      return []
    }
  }

  private getFallbackRecommendations(
    request: RecommendationRequest,
    devices: Device[]
  ): AIRecommendation[] {
    const filtered = devices
      .filter(d => d.category === request.category)
      .filter(d => {
        if (!request.budget) return true
        return d.price >= request.budget.min && d.price <= request.budget.max
      })
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3)

    return filtered.map(device => ({
      device,
      score: Math.floor(device.rating * 20), // Convert 5-star to 100-point scale
      reasoning: `Highly rated ${device.category} with excellent features for your needs.`,
      pros: device.features.slice(0, 3),
      cons: ['Limited availability information']
    }))
  }
}

export default DeepseekAI