import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import MovieCard from '@/components/MovieCard';

export default function MyList() {
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

  const myListMovies = user.myList || [];

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <Navbar />
      
      <div className="pt-24 px-12">
        <h1 className="text-4xl font-bold mb-8">My List</h1>
        
        {myListMovies.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">Your list is empty</p>
            <p className="text-gray-500 mt-4">
              Add movies and shows to your list to watch them later
            </p>
            <button
              onClick={() => router.push('/browse')}
              className="mt-8 bg-netflix-red text-white px-8 py-3 rounded font-bold hover:bg-netflix-red/90 transition"
            >
              Browse Content
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {myListMovies.map((item) => {
              const movie = {
                id: item.movieId,
                title: item.title,
                poster: item.poster,
                description: `Added on ${new Date(item.addedAt).toLocaleDateString()}`,
              };
              return <MovieCard key={item.movieId} movie={movie} />;
            })}
          </div>
        )}
      </div>

      <footer className="bg-netflix-black py-12 px-12 mt-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-500 space-y-4">
            <p>Questions? Contact us.</p>
            <p className="text-xs mt-8">© 2024 Netflix Clone</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
