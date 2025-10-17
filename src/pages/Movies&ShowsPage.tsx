import NavBar from "@/components/NavBar";
import { useMovieData } from "@/contexts/MovieContext";
import MovieSection from "@/components/Movies&ShowsPage/MovieSection";
import LoadingScreen from "@/components/LoadingScreen";
import CTA from "@/components/CTA";
import Trailer from "@/components/Movies&ShowsPage/Trailer";

function MoviesAndShowsPage() {
  const { movieData, loading, error } = useMovieData();

  if (loading) return <LoadingScreen />;

  if (error) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <p className="text-xl text-red-50">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Nav */}
      <NavBar currentPage="movies-and-shows" />

      <div className="bg-background min-h-screen">
        {/* Trailer Video */}
        <Trailer />

        <div className="containerBox">
          {movieData && (
            <div className="flex flex-col gap-16">
              {/* Movies Section */}
              <div>
                <h2 className="mb-8 border-l-4 border-red-50 pl-4 text-3xl font-bold text-white">
                  🎬 Movies
                </h2>
                <div className="space-y-12">
                  <MovieSection
                    title="Trending Movies"
                    movies={movieData.trending}
                  />
                  <MovieSection
                    title="Popular Movies"
                    movies={movieData.popular}
                  />
                  <MovieSection
                    title="Top Rated Movies"
                    movies={movieData.topRated}
                  />
                  <MovieSection
                    title="Coming Soon"
                    movies={movieData.upcoming}
                  />
                </div>
              </div>

              {/* Shows Section - Using movie data for now, can be extended later */}
              <div>
                <h2 className="mb-8 border-l-4 border-red-50 pl-4 text-3xl font-bold text-white">
                  📺 TV Shows
                </h2>
                <div className="space-y-12">
                  <MovieSection
                    title="Popular Shows"
                    movies={movieData.popular.slice(0, 8)}
                  />
                  <MovieSection
                    title="Trending Shows"
                    movies={movieData.trending.slice(0, 8)}
                  />
                  <MovieSection
                    title="Must Watch Shows"
                    movies={movieData.topRated.slice(0, 8)}
                  />
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
