import { NextRequest, NextResponse } from 'next/server'
import GeminiAI from '@/lib/gemini'
import { devices } from '@/data/devices'
import { RecommendationRequest } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body: RecommendationRequest = await request.json()
    
    // Use Gemini API key
    const apiKey = process.env.GEMINI_API_KEY || 'not_configured'
    
    const gemini = new GeminiAI(apiKey)
    const recommendations = await gemini.getRecommendations(body, devices)

    return NextResponse.json({ recommendations })
  } catch (error) {
    console.error('Error getting recommendations:', error)
    return NextResponse.json(
      { error: 'Failed to get recommendations' },
      { status: 500 }
    )
  }
}