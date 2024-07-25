import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Movie from "../atomic/pages/movie";
// import Anime from "../atomic/pages/anime";

// Lazy load
const Movie = lazy(() => import("../atomic/pages/movie"));
const Anime = lazy(() => import("../atomic/pages/anime"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello Cyber</h1>
        <Link to="movie">Movie</Link>
        <Link to="anime">Anime</Link>
      </div>
    ),
  },

  {
    path: "movie",
    element: (
      // Đợi page của chúng ta tải xong rồi mới sử dụng để render.
      // fallback: render tạm thời khi page chưa tải xong
      <Suspense fallback={<>Loading....</>}>
        <Movie />
      </Suspense>
    ),
  },

  {
    path: "tv-series",
    element: <>tv-series</>,
  },

  {
    path: "anime",
    element: (
      <Suspense fallback={<>Loading....</>}>
        <Anime />
      </Suspense>
    ),
  },

  {
    path: "*",
    // C1: Custom Page Not Found
    // element: <>Not Found</>,

    // C2: Mong muốn chuyển về trang home
    element: <Navigate to={"/"} replace />,
  },
]);
