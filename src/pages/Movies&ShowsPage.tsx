import NavBar from "@/components/NavBar";
import { useMovieData } from "@/contexts/MovieContext";
import MovieSection from "@/components/HomePage/MovieSection";
import LoadingScreen from "@/components/LoadingScreen";
import CTA from "@/components/CTA";

function MoviesAndShowsPage() {
  const { movieData, loading, error } = useMovieData();

  if (loading) return <LoadingScreen />;
  
  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-red-50 text-xl">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Nav */}
      <NavBar currentPage="movies-and-shows" />

      <div className="bg-background min-h-screen">
        <div className="containerBox py-20 flex flex-col gap-20">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold mb-4">Movies & TV Shows</h1>
            <p className="text-grey-60 text-lg max-w-2xl mx-auto">
              Discover thousands of movies and TV shows. From blockbuster hits to hidden gems, 
              we have something for everyone.
            </p>
          </div>

          {movieData && (
            <div className="flex flex-col gap-16">
              {/* Movies Section */}
              <div>
                <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-red-50 pl-4">
                  🎬 Movies
                </h2>
                <div className="space-y-12">
                  <MovieSection title="Trending Movies" movies={movieData.trending} />
                  <MovieSection title="Popular Movies" movies={movieData.popular} />
                  <MovieSection title="Top Rated Movies" movies={movieData.topRated} />
                  <MovieSection title="Coming Soon" movies={movieData.upcoming} />
                </div>
              </div>

              {/* Shows Section - Using movie data for now, can be extended later */}
              <div>
                <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-red-50 pl-4">
                  📺 TV Shows
                </h2>
                <div className="space-y-12">
                  <MovieSection title="Popular Shows" movies={movieData.popular.slice(0, 8)} />
                  <MovieSection title="Trending Shows" movies={movieData.trending.slice(0, 8)} />
                  <MovieSection title="Must Watch Shows" movies={movieData.topRated.slice(0, 8)} />
                </div>
              </div>
            </div>
          )}

        {/* CTA */}
          <CTA />
        </div>
      </div>
    </>
  );
}

export default MoviesAndShowsPage;
