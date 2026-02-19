import { useState } from 'react';
import { FaPlay, FaPlus, FaCheck, FaStar } from 'react-icons/fa';
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
      <div className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-streamflix-darker via-transparent to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3 lg:w-1/2 z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
            {movie.title}
          </h1>

          <div className="flex items-center gap-4 mb-4 text-sm md:text-base">
            {movie.imdbRating && (
              <div className="flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-500/30">
                <FaStar className="text-yellow-500" />
                <span className="font-bold">{movie.imdbRating}</span>
              </div>
            )}
            {movie.year && (
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                {movie.year}
              </span>
            )}
            {movie.rated && (
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                {movie.rated}
              </span>
            )}
            {movie.runtime && (
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                {movie.runtime}
              </span>
            )}
          </div>

          <p className="text-base md:text-lg lg:text-xl mb-6 drop-shadow-lg line-clamp-3 max-w-2xl">
            {movie.plot || movie.description}
          </p>

          {movie.genre && (
            <p className="text-sm md:text-base text-gray-300 mb-6">
              {movie.genre}
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-streamflix-primary via-streamflix-secondary to-streamflix-accent text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all">
              <FaPlay /> Play Now
            </button>
            <button 
              onClick={handleToggleList}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white/30 hover:scale-105 transition-all"
            >
              {inList ? <FaCheck /> : <FaPlus />}
              {inList ? 'In My List' : 'Add to List'}
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
        className="w-full h-auto rounded-lg shadow-xl border border-streamflix-primary/20"
        loading="lazy"
      />
      
      {isHovered && (
        <div className="absolute inset-0 bg-black/90 rounded-md p-4 flex flex-col justify-end">
          <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
          <p className="text-sm text-gray-300 mb-3 line-clamp-2">
            {movie.description}
          </p>
          <div className="flex gap-2">
            <button className="flex items-center justify-center gap-1 bg-gradient-to-r from-streamflix-primary to-streamflix-secondary text-white px-4 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:scale-105 transition-all">
              <FaPlay size={12} /> Play
            </button>
            <button
              onClick={handleToggleList}
              className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 hover:scale-110 transition-all border border-white/30"
            >
              {inList ? <FaCheck size={14} /> : <FaPlus size={14} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
