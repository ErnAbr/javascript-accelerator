import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Services } from "../pages/Services";
import { AboutUs } from "../pages/AboutUs";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/NotFound";
import { SearchCategory } from "../pages/SearchCategory";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/search/:category", element: <SearchCategory /> },
  { path: "/not-found", element: <NotFound /> },
  { path: "*", element: <Navigate replace to="/not-found" /> },
];

const router = createBrowserRouter(
  routes.map((route) => ({
    path: route.path,
    element: route.element,
  }))
);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
