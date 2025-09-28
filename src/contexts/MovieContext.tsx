import React, { createContext, useContext, useState, useEffect } from "react";

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

interface MovieContextType {
  movieData: MovieData | null;
  loading: boolean;
  error: string | null;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export function MovieProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        setError(null);
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
        setError("Failed to fetch movie data");
      } finally {
        setLoading(false);
      }
    };

    fetchAllMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movieData, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieData() {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovieData must be used within a MovieProvider");
  }
  return context;
}