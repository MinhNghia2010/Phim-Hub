import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";
import { useMovieData } from "./contexts/MovieContext";

function App() {
  const { loading } = useMovieData();

  if (loading) return <LoadingScreen />;
  return (
    <div className="bg-background min-h-screen">
      <HomePage />
    </div>
  );
}

export default App;
