import { type Movie } from "@/contexts/MovieContext";

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

function MovieCard({ movie }: { movie: Movie }) {
  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder-movie.jpg";

  return (
    <div className="flex-shrink-0 w-48 bg-black-10 rounded-lg overflow-hidden border border-black-15 hover:border-red-45 transition-colors duration-200">
      <img 
        src={imageUrl} 
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between text-xs text-grey-60">
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span className="flex items-center gap-1">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}

function MovieSection({ title, movies }: MovieSectionProps) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="w-full">
      <h2 className="text-white text-2xl font-bold mb-6">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieSection;