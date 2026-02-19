import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import MovieCard from './MovieCard';

export default function MovieRow({ title, movies }) {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="mb-12 group/row relative">
      <h2 className="text-xl md:text-2xl font-bold mb-4 px-4 md:px-12">{title}</h2>
      <div className="relative px-4 md:px-12">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-40 w-12 bg-black/50 opacity-0 group-hover/row:opacity-100 hover:bg-black/80 transition flex items-center justify-center"
        >
          <FaChevronLeft size={24} />
        </button>

        <div
          ref={rowRef}
          className="flex gap-3 overflow-x-scroll scrollbar-hide py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="min-w-[180px] md:min-w-[220px] flex-shrink-0">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-40 w-12 bg-black/50 opacity-0 group-hover/row:opacity-100 hover:bg-black/80 transition flex items-center justify-center"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
