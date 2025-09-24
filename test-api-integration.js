// Test Gemini API integration
const testGeminiAPI = async () => {
  try {
    const testRequest = {
      category: 'laptop',
      budget: { min: 800, max: 1500 },
      usage: 'gaming and work',
      experience: 'intermediate',
      preferences: ['high performance', 'good display']
    }

    console.log('Testing Gemini API with request:', testRequest)
    
    const response = await fetch('http://localhost:3000/api/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testRequest),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log('✅ API Response:', JSON.stringify(data, null, 2))
    
    // Verify response structure
    if (data.recommendations && data.recommendations.length > 0) {
      console.log('✅ Recommendations received:', data.recommendations.length)
      data.recommendations.forEach((rec, index) => {
        console.log(`\n📱 Recommendation ${index + 1}:`)
        console.log(`  Device: ${rec.device?.name || 'Unknown'}`)
        console.log(`  Score: ${rec.score}`)
        console.log(`  Reasoning: ${rec.reasoning}`)
        console.log(`  Pros: ${rec.pros?.join(', ') || 'None'}`)
        console.log(`  Cons: ${rec.cons?.join(', ') || 'None'}`)
      })
    } else {
      console.log('⚠️ No recommendations in response')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
    console.error('Full error:', error)
  }
}

// Run the test
testGeminiAPI()