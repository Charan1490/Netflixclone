// Test OMDB API directly
export default async function handler(req, res) {
  const OMDB_API_KEY = process.env.OMDB_API_KEY;
  
  console.log('=== OMDB DEBUG ===');
  console.log('API Key exists:', !!OMDB_API_KEY);
  console.log('API Key value:', OMDB_API_KEY);
  console.log('API Key length:', OMDB_API_KEY?.length);
  
  if (!OMDB_API_KEY) {
    return res.status(500).json({
      success: false,
      error: 'OMDB_API_KEY not found in environment variables'
    });
  }

  try {
    // Test with a simple movie lookup
    const testUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=tt3896198`;
    console.log('Test URL:', testUrl);
    
    const response = await fetch(testUrl);
    const data = await response.json();
    
    console.log('OMDB Response:', data);
    
    return res.status(200).json({
      success: true,
      apiKeyProvided: !!OMDB_API_KEY,
      apiKeyLength: OMDB_API_KEY?.length,
      omdbResponse: data,
      url: testUrl
    });
  } catch (error) {
    console.error('OMDB Test Error:', error);
    return res.status(500).json({
      success: false,
      error: error.message,
      stack: error.stack
    });
  }
}
