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
    <div className="bg-black-10 border-black-15 hover:border-red-45 w-48 flex-shrink-0 overflow-hidden rounded-lg border transition-colors duration-200">
      <img
        src={imageUrl}
        alt={movie.title}
        className="h-72 w-full object-cover"
      />
      <div className="p-3">
        <h3 className="mb-1 line-clamp-2 text-sm font-semibold text-white">
          {movie.title}
        </h3>
        <div className="text-grey-60 flex items-center justify-between text-xs">
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
      <h2 className="mb-6 text-2xl font-bold text-white">{title}</h2>
      <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieSection;
