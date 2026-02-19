import { getPopularMovies } from '@/lib/omdb';
import { sampleMovies } from '@/data/movies';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  console.log('=== /api/movies called ===');
  console.log('OMDB_API_KEY exists:', !!process.env.OMDB_API_KEY);
  console.log('OMDB_API_KEY value:', process.env.OMDB_API_KEY);

  try {
    console.log('[API] Attempting to fetch movies from OMDB...');
    const movies = await getPopularMovies();

    console.log(`[API] OMDB returned ${movies ? movies.length : 0} movies`);

    // If OMDB works, use it
    if (movies && movies.length > 0) {
      console.log(`[API] ✓ SUCCESS - Using ${movies.length} movies from OMDB`);
      return res.status(200).json({
        success: true,
        movies: movies,
        count: movies.length,
        source: 'omdb',
        message: 'Using real OMDB data'
      });
    }

    // If OMDB fails, use fallback
    console.log('[API] ⚠ OMDB failed - Using fallback data');
    console.log('[API] Reason: API key may not be activated or limit reached');
    return res.status(200).json({
      success: true,
      movies: sampleMovies,
      count: sampleMovies.length,
      source: 'fallback',
      message: 'OMDB not available - using sample data. Check OMDB_API_KEY activation.',
      omdbError: 'API key not activated or invalid'
    });
  } catch (error) {
    console.error('[API] ✗ Exception:', error.message);

    // Always return fallback data instead of failing
    console.log('[API] Using fallback data due to exception');
    return res.status(200).json({ 
      success: true, 
      movies: sampleMovies,
      count: sampleMovies.length,
      source: 'fallback-error',
      message: 'Using sample data (OMDB error)',
      error: error.message
    });
  }
}
