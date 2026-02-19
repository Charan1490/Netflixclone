const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_BASE_URL = 'http://www.omdbapi.com/';

console.log('=== OMDB INITIALIZATION ===');
console.log('[OMDB] API Key exists:', !!OMDB_API_KEY);
console.log('[OMDB] API Key value:', OMDB_API_KEY);
console.log('[OMDB] API Key type:', typeof OMDB_API_KEY);
console.log('[OMDB] All env vars:', Object.keys(process.env).filter(k => k.includes('OMDB')));

// Popular movie IDs to fetch
const MOVIE_IDS = [
  'tt3896198', // Guardians of the Galaxy Vol. 2
  'tt4154796', // Avengers: Endgame
  'tt1375666', // Inception
  'tt0816692', // Interstellar
  'tt0468569', // The Dark Knight
  'tt0137523', // Fight Club
  'tt0109830', // Forrest Gump
  'tt0110912', // Pulp Fiction
  'tt0111161', // The Shawshank Redemption
  'tt0120737', // The Lord of the Rings
  'tt0167260', // The Lord of the Rings: The Return of the King
  'tt0816711', // World War Z
  'tt1853728', // Django Unchained
  'tt0114369', // Se7en
  'tt0133093', // The Matrix
  'tt0103064', // Terminator 2
  'tt0120815', // Saving Private Ryan
  'tt0073486', // One Flew Over the Cuckoo's Nest
  'tt0317248', // City of God
  'tt0245429', // Spirited Away
];

export async function fetchMovieById(imdbId) {
  try {
    if (!OMDB_API_KEY) {
      console.error('[OMDB] API Key is missing!');
      return null;
    }

    const url = `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&i=${imdbId}&plot=full`;
    console.log(`[OMDB] Fetching: ${imdbId}`);
    console.log(`[OMDB] URL: ${url}`);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`[OMDB] HTTP Error ${response.status} for ${imdbId}`);
      return null;
    }

    const data = await response.json();
    console.log(`[OMDB] Response for ${imdbId}:`, data.Response);

    if (data.Response === 'True') {
      console.log(`[OMDB] ✓ Success: ${data.Title}`);
      return formatMovieData(data);
    } else {
      console.error(`[OMDB] ✗ Error for ${imdbId}:`, data.Error);
      return null;
    }
  } catch (error) {
    console.error(`[OMDB] ✗ Exception for ${imdbId}:`, error.message);
    return null;
  }
}

export async function fetchMultipleMovies(imdbIds) {
  console.log(`[OMDB] Starting to fetch ${imdbIds.length} movies...`);
  const promises = imdbIds.map(id => fetchMovieById(id));
  const results = await Promise.all(promises);
  const successfulMovies = results.filter(movie => movie !== null);
  console.log(`[OMDB] Successfully fetched ${successfulMovies.length}/${imdbIds.length} movies`);
  return successfulMovies;
}

export async function getPopularMovies() {
  console.log('[OMDB] getPopularMovies() called');
  const movies = await fetchMultipleMovies(MOVIE_IDS);
  console.log(`[OMDB] Returning ${movies.length} movies`);
  return movies;
}

function formatMovieData(omdbMovie) {
  return {
    id: omdbMovie.imdbID,
    title: omdbMovie.Title,
    year: omdbMovie.Year,
    rated: omdbMovie.Rated,
    runtime: omdbMovie.Runtime,
    genre: omdbMovie.Genre,
    director: omdbMovie.Director,
    actors: omdbMovie.Actors,
    plot: omdbMovie.Plot,
    poster: omdbMovie.Poster !== 'N/A' ? omdbMovie.Poster : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop',
    backdrop: omdbMovie.Poster !== 'N/A' ? omdbMovie.Poster : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop',
    imdbRating: omdbMovie.imdbRating,
    imdbVotes: omdbMovie.imdbVotes,
    category: categorizeMovie(omdbMovie.Genre),
  };
}

function categorizeMovie(genres) {
  const genreList = genres.toLowerCase();
  if (genreList.includes('action') || genreList.includes('adventure')) {
    return 'action';
  } else if (genreList.includes('sci-fi') || genreList.includes('fantasy')) {
    return 'scifi';
  } else if (genreList.includes('drama') || genreList.includes('crime')) {
    return 'top';
  }
  return 'trending';
}
