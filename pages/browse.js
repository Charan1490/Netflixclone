import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import MovieCard from '@/components/MovieCard';
import MovieRow from '@/components/MovieRow';
import { sampleMovies, getFeaturedMovie, getMoviesByCategory } from '@/data/movies';

export default function Browse() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="text-netflix-red text-6xl font-bold animate-pulse">
          NETFLIX
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const featuredMovie = getFeaturedMovie();
  const trendingMovies = getMoviesByCategory('trending');
  const topRated = getMoviesByCategory('top');
  const actionMovies = getMoviesByCategory('action');
  const scifiMovies = getMoviesByCategory('scifi');

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <Navbar />
      
      <MovieCard movie={featuredMovie} featured />

      <div className="relative z-10 -mt-32">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Top Rated" movies={topRated} />
        <MovieRow title="Action & Adventure" movies={actionMovies} />
        <MovieRow title="Sci-Fi" movies={scifiMovies} />
        <MovieRow title="Popular on Netflix" movies={sampleMovies} />
      </div>

      <footer className="bg-netflix-black py-12 px-12 mt-16 border-t border-gray-800">
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
            <p className="text-xs mt-8">© 2024 Netflix Clone</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
