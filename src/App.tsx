import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <div className="bg-background min-h-screen">
      <HomePage />
    </div>
  );
}

export default App;
