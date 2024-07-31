import { lazy, Suspense } from "react";
import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import { UserTemplate } from "../atomic/templates/user";

// import Movie from "../atomic/pages/movie";
// import Anime from "../atomic/pages/anime";

// Lazy load
const Movie = lazy(() => import("../atomic/pages/movie"));
const Anime = lazy(() => import("../atomic/pages/anime"));
const ShowingMovie = lazy(() => import("../atomic/pages/showing-movie"));

{
  /* <UserTemplate>
  <ShowingMovie />
</UserTemplate> */
}

// /showing-movie/1
{
  /* <UserTemplate>
  <ShowingMovie>
    <>Component 1</>
  </ShowingMovie>
</UserTemplate> */
}

export const router = createBrowserRouter([
  {
    path: "",
    element: <UserTemplate />,
    children: [
      {
        path: "home",
        element: (
          <div>
            <h1>Hello Cyber</h1>
            <Link to="movie">Movie</Link>
            <Link to="anime">Anime</Link>
          </div>
        ),
      },
      {
        path: "showing-movie",
        element: <ShowingMovie />,

        // children: [
        //   {
        //     path: "1",
        //     element: <>Component 1</>,
        //   },
        // ],
      },

      {
        path: "coming-movie",
        element: <>Coming movie</>,
      },
    ],
  },

  {
    path: "admin",
    element: <>Admin</>,
    children: [
      {
        path: "create-user",
        element: "",
      },
      {
        path: "delete-user",
        element: "",
      },
    ],
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
    element: <>Not Found</>,

    // C2: Mong muốn chuyển về trang home
    // element: <Navigate to={"/"} replace />,
  },
]);
