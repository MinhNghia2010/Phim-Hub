import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="bg-background min-h-screen">
          <HomePage />
        </div>
      )}
    </>
  );
}

export default App;
