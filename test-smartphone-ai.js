// Test smartphone AI recommendations
const testSmartphoneAI = async () => {
  console.log('🧪 Testing smartphone AI recommendations...');
  
  const requestBody = {
    category: 'mobile',
    budget: { min: 500, max: 1000 },
    usage: 'photography and social media',
    experience: 'intermediate',
    preferences: ['camera quality', 'battery life']
  };
  
  try {
    const response = await fetch('http://localhost:3000/api/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ **SMARTPHONE AI RECOMMENDATIONS WORKING!**');
    console.log('📱 Number of recommendations:', data.recommendations?.length || 0);
    
    if (data.recommendations && data.recommendations.length > 0) {
      console.log('🎯 First recommendation:', data.recommendations[0].device.name);
      console.log('💡 Reasoning:', data.recommendations[0].reasoning.substring(0, 100) + '...');
    } else {
      console.log('⚠️ No recommendations returned');
    }
    
  } catch (error) {
    console.log('❌ **ERROR TESTING SMARTPHONE AI:**');
    console.log('🚨 Error:', error.message);
  }
};

testSmartphoneAI();