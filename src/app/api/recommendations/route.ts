import { NextRequest, NextResponse } from 'next/server'
import DeepseekAI from '@/lib/deepseek'
import { devices } from '@/data/devices'
import { RecommendationRequest } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body: RecommendationRequest = await request.json()
    
    if (!process.env.DEEPSEEK_API_KEY) {
      return NextResponse.json(
        { error: 'Deepseek API key not configured' },
        { status: 500 }
      )
    }

    const deepseek = new DeepseekAI(process.env.DEEPSEEK_API_KEY)
    const recommendations = await deepseek.getRecommendations(body, devices)

    return NextResponse.json({ recommendations })
  } catch (error) {
    console.error('Error getting recommendations:', error)
    return NextResponse.json(
      { error: 'Failed to get recommendations' },
      { status: 500 }
    )
  }
}