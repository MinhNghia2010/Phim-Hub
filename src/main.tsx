import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import SupportPage from "./pages/SupportPage.tsx";
import SubscriptionPage from "./pages/SubcriptionPage.tsx";
import MoviesAndShowsPage from "./pages/Movies&ShowsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <HomePage /> },
  { path: "/movies-and-shows", element: <MoviesAndShowsPage /> },
  { path: "/subscription", element: <SubscriptionPage /> },
  { path: "/support", element: <SupportPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
