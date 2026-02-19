import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import MovieCard from '@/components/MovieCard';
import MovieRow from '@/components/MovieRow';
import axios from 'axios';

export default function Browse() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [movies, setMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(true);
  const [dataSource, setDataSource] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log('Fetching movies...');
        const { data } = await axios.get('/api/movies');
        console.log('API Response:', data);

        if (data.success && data.movies) {
          console.log(`✓ Loaded ${data.movies.length} movies from ${data.source}`);

          // Show message if using fallback
          if (data.source !== 'omdb') {
            console.warn('⚠ Using fallback data. OMDB API not available.');
            console.warn('Message:', data.message);
            if (data.omdbError) {
              console.error('OMDB Error:', data.omdbError);
            }
          }

          setMovies(data.movies);
        } else {
          console.error('No movies in response');
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
        console.error('This should not happen - API should return fallback data');
      } finally {
        setLoadingMovies(false);
      }
    };

    if (user) {
      fetchMovies();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-streamflix-darker via-streamflix-dark to-streamflix-darker flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold bg-gradient-to-r from-streamflix-primary via-streamflix-secondary to-streamflix-accent bg-clip-text text-transparent animate-pulse mb-4">
            STREAMFLIX
          </div>
          <div className="text-gray-400 animate-pulse">Loading your content...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const featuredMovie = movies.length > 0 ? movies[0] : null;
  const actionMovies = movies.filter(m => m.category === 'action');
  const scifiMovies = movies.filter(m => m.category === 'scifi');
  const topRated = movies.filter(m => m.category === 'top');
  const trending = movies.filter(m => m.category === 'trending');

  return (
    <div className="min-h-screen bg-gradient-to-b from-streamflix-darker via-streamflix-dark to-streamflix-darker text-white">
      <Navbar />

      {/* Data Source Notification */}
      {showNotification && dataSource !== 'omdb' && (
        <div className="fixed top-20 right-4 z-50 bg-yellow-500/20 backdrop-blur-lg border border-yellow-500/50 text-white px-6 py-4 rounded-lg shadow-2xl max-w-md">
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="font-bold mb-1">Using Sample Data</h3>
              <p className="text-sm text-gray-200">
                OMDB API key not activated. Check <strong>OMDB_SETUP.md</strong> for activation steps.
              </p>
              <p className="text-xs text-gray-300 mt-2">
                Current API Key: 38621094
              </p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-white/70 hover:text-white text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {loadingMovies ? (
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-streamflix-primary via-streamflix-secondary to-streamflix-accent bg-clip-text text-transparent animate-pulse mb-4">
              Loading Movies...
            </div>
            <div className="text-gray-400">Fetching real movie data from OMDB</div>
          </div>
        </div>
      ) : (
        <>
          {featuredMovie && <MovieCard movie={featuredMovie} featured />}

          <div className="relative -mt-20 md:-mt-32 z-20 pb-16">
            {trending.length > 0 && <MovieRow title="Trending Now" movies={trending} />}
            {topRated.length > 0 && <MovieRow title="Top Rated" movies={topRated} />}
            {actionMovies.length > 0 && <MovieRow title="Action & Adventure" movies={actionMovies} />}
            {scifiMovies.length > 0 && <MovieRow title="Sci-Fi & Fantasy" movies={scifiMovies} />}
            {movies.length > 0 && <MovieRow title="Popular on StreamFlix" movies={movies} />}
          </div>
        </>
      )}

      <footer className="bg-streamflix-darker py-12 px-4 md:px-12 mt-16 border-t border-streamflix-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-500 space-y-4">
            <p>Questions? Contact us.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="hover:underline cursor-pointer">FAQ</p>
                <p className="hover:underline cursor-pointer">Investor Relations</p>
                <p className="hover:underline cursor-pointer">Privacy</p>
              </div>
              <div>
                <p className="hover:underline cursor-pointer">Help Center</p>
                <p className="hover:underline cursor-pointer">Jobs</p>
                <p className="hover:underline cursor-pointer">Cookie Preferences</p>
              </div>
              <div>
                <p className="hover:underline cursor-pointer">Account</p>
                <p className="hover:underline cursor-pointer">Ways to Watch</p>
                <p className="hover:underline cursor-pointer">Corporate Information</p>
              </div>
              <div>
                <p className="hover:underline cursor-pointer">Media Center</p>
                <p className="hover:underline cursor-pointer">Terms of Use</p>
                <p className="hover:underline cursor-pointer">Contact Us</p>
              </div>
            </div>
            <p className="text-xs mt-8">© 2024 StreamFlix - Premium Streaming Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
