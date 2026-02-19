import { useState } from 'react';
import { FaPlay, FaPlus, FaCheck } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';

export default function MovieCard({ movie, featured = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleMyList, isInMyList } = useAuth();
  const inList = isInMyList(movie.id);

  const handleToggleList = (e) => {
    e.stopPropagation();
    toggleMyList(movie.id, movie.title, movie.poster);
  };

  if (featured) {
    return (
      <div className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <img
            src={movie.backdrop || movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 p-12 w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            {movie.title}
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-lg line-clamp-3">
            {movie.description}
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-bold text-lg hover:bg-white/80 transition">
              <FaPlay /> Play
            </button>
            <button 
              onClick={handleToggleList}
              className="flex items-center gap-2 bg-gray-500/70 text-white px-8 py-3 rounded font-bold text-lg hover:bg-gray-500/50 transition"
            >
              {inList ? <FaCheck /> : <FaPlus />}
              {inList ? 'In My List' : 'My List'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-auto rounded-md"
      />
      
      {isHovered && (
        <div className="absolute inset-0 bg-black/90 rounded-md p-4 flex flex-col justify-end">
          <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
          <p className="text-sm text-gray-300 mb-3 line-clamp-2">
            {movie.description}
          </p>
          <div className="flex gap-2">
            <button className="flex items-center justify-center gap-1 bg-white text-black px-4 py-2 rounded text-sm font-bold hover:bg-white/80 transition">
              <FaPlay size={12} /> Play
            </button>
            <button
              onClick={handleToggleList}
              className="flex items-center justify-center w-10 h-10 bg-gray-500/70 text-white rounded hover:bg-gray-500/50 transition"
            >
              {inList ? <FaCheck size={14} /> : <FaPlus size={14} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
