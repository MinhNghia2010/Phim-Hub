import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";

const API_KEY = "a9c39bb873d5f77ae71c9fca8b9b641e";
const BASE_URL = "https://api.themoviedb.org/3";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
}

export interface MovieData {
  popular: Movie[];
  trending: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

function App() {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState<MovieData | null>(null);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        // Fetch multiple categories of movies
        const [popularRes, trendingRes, topRatedRes, upcomingRes] =
          await Promise.all([
            fetch(
              `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
            ),
            fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`),
            fetch(
              `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
            ),
            fetch(
              `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
            ),
          ]);

        const [popular, trending, topRated, upcoming] = await Promise.all([
          popularRes.json(),
          trendingRes.json(),
          topRatedRes.json(),
          upcomingRes.json(),
        ]);

        setMovieData({
          popular: popular.results,
          trending: trending.results,
          topRated: topRated.results,
          upcoming: upcoming.results,
        });
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMovies();
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <div className="bg-background min-h-screen">
      <HomePage movieData={movieData} />
    </div>
  );
}

export default App;
