import { useState, useEffect } from "react";
import { useMovieData } from "@/contexts/MovieContext";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const API_KEY = "a9c39bb873d5f77ae71c9fca8b9b641e";
const BASE_URL = "https://api.themoviedb.org/3";

interface TrailerData {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  trailerKey?: string;
}

function Trailer() {
  const { movieData } = useMovieData();
  const [trailers, setTrailers] = useState<TrailerData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchTrailers = async () => {
      if (!movieData?.trending) return;

      try {
        // Get top 4 trending movies
        const topMovies = movieData.trending.slice(0, 4);
        const trailersData: TrailerData[] = [];

        for (const movie of topMovies) {
          try {
            const response = await fetch(
              `${BASE_URL}/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
            );
            const data = await response.json();
            
            // Find the first YouTube trailer
            const trailer = data.results?.find(
              (video: any) => video.type === "Trailer" && video.site === "YouTube"
            );

            trailersData.push({
              id: movie.id,
              title: movie.title,
              backdrop_path: movie.backdrop_path,
              poster_path: movie.poster_path,
              overview: movie.overview,
              trailerKey: trailer?.key
            });
          } catch (error) {
            console.error(`Error fetching trailer for ${movie.title}:`, error);
            // Add movie without trailer
            trailersData.push({
              id: movie.id,
              title: movie.title,
              backdrop_path: movie.backdrop_path,
              poster_path: movie.poster_path,
              overview: movie.overview
            });
          }
        }

        setTrailers(trailersData);
      } catch (error) {
        console.error("Error fetching trailers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrailers();
  }, [movieData]);

  
  const nextTrailer = () => {
    setCurrentIndex((prev) => (prev + 1) % trailers.length);
    setIsPlaying(false); // Reset to banner view when switching
  };

  const prevTrailer = () => {
    setCurrentIndex((prev) => (prev - 1 + trailers.length) % trailers.length);
    setIsPlaying(false); // Reset to banner view when switching
  };

  const handlePlayClick = () => {
    if (currentTrailer.trailerKey) {
      setIsPlaying(true);
    }
  };

  if (loading) {
    return (
      <div className="w-full aspect-video rounded-lg bg-black-10 flex items-center justify-center">
        <p className="text-white">Loading trailers...</p>
      </div>
    );
  }

  if (trailers.length === 0) {
    return (
      <div className="w-full aspect-video rounded-lg bg-black-10 flex items-center justify-center">
        <p className="text-white">No trailers available</p>
      </div>
    );
  }

  const currentTrailer = trailers[currentIndex];
  return (
    <div className="w-full">
      <div className="relative w-full aspect-[3/4] sm:aspect-video overflow-hidden bg-black-10 ">
        {isPlaying && currentTrailer.trailerKey ? (
          // Show trailer iframe when playing
          <iframe
            src={`https://www.youtube.com/embed/${currentTrailer.trailerKey}?autoplay=1&controls=1&showinfo=0&rel=0`}
            title={`${currentTrailer.title} Trailer`}
            className="aspect-video w-full h-full z-50"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          // Show movie banner with play button
          <div className="relative w-full h-full">
            {/* Desktop: Backdrop image */}
            <img
              src={`https://image.tmdb.org/t/p/w1280${currentTrailer.backdrop_path}`}
              alt={currentTrailer.title}
              className="hidden sm:block w-full h-full object-cover mask-y-from-50% mask-y-to-100% bg-black-10"
            />
            
            {/* Mobile/Tablet: Poster image */}
            <img
              src={`https://image.tmdb.org/t/p/w780${currentTrailer.poster_path}`}
              alt={currentTrailer.title}
              className="block sm:hidden w-full h-full object-cover mask-y-from-50% mask-y-to-100%"
            />
            
            <div className="absolute inset-0 bg-black/40" />
            

            {/* Movie Title and Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="containerBox py-6 md:py-8 lg:py-12 flex flex-col items-center justify-end gap-3 md:gap-4 lg:gap-6">
                {/* Movie Title */}
                <h3 className="text-white font-bold text-center leading-tight
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                  max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
                  {currentTrailer.title}
                </h3>
                
                {/* Movie Overview - Hidden on smaller than md, 2 lines on md+ */}
                {currentTrailer.overview && (
                  <p className="text-grey-60 text-center leading-relaxed hidden md:block
                    text-sm md:text-base xl:text-xl
                    max-w-[85%] lg:max-w-[75%] xl:max-w-[65%]
                    line-clamp-2">
                    {currentTrailer.overview}
                  </p>
                )}
                
                {/* Play Button */}
                <div className="mt-2 md:mt-4 lg:mt-6">
                  {currentTrailer.trailerKey ? (
                    <Button
                      onClick={handlePlayClick}
                      className="bg-red-50 hover:bg-red-45 text-white border-none rounded-lg 
                        flex items-center justify-center gap-2 md:gap-3 transition-all duration-300
                        hover:scale-105 hover:shadow-lg hover:shadow-red-50/20
                        px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5
                        text-sm sm:text-base md:text-lg lg:text-xl font-semibold
                        w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-auto mb-6 sm:mb-8 lg:mb-10 xl:mb-12 2xl:mb-40"
                    >
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" />
                      Watch Trailer
                    </Button>
                  ) : (
                    <div className="text-center opacity-60 py-4">
                      <Play className="w-12 h-12 md:w-16 md:h-16 text-white mb-3 mx-auto opacity-50" />
                      <p className="text-white text-base md:text-lg">Trailer not available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Arrows - only show when not playing */}
        {!isPlaying && trailers.length > 1 && (
          <div className="absolute flex left-0 nav-padding bottom-5 md:bottom-8 xl:bottom-10 2xl:bottom-30 text-white border-none z-50 justify-center sm:justify-between w-full">
            <Button
              onClick={prevTrailer}
              className="bg-black/50 hover:bg-black/70 hidden sm:flex"
              size="icon"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            {/* Trailer Indicators */}
            {trailers.length > 1 && (
              <div className="flex justify-center space-x-2 mt-4 items-end">
                {trailers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? "bg-red-50 w-6" : "bg-grey-60 w-3"
                    }`}
                  />
                ))}
              </div>
            )}
            <Button
              onClick={nextTrailer}
              className="bg-black/50 hover:bg-black/70 hidden sm:flex"
              size="icon"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        )}

        {/* Back to Banner Button - show when playing */}
        {isPlaying && (
          <Button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white border-none z-1000"
            size="sm"
          >
            Back to Banner
          </Button>
        )}
      </div>


    </div>
  );
}

export default Trailer;
