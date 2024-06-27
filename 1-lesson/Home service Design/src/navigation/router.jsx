import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Services } from "../pages/Services";
import { AboutUs } from "../pages/AboutUs";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/NotFound";
import { routes } from "./routes";

const routeObjects = [
  { path: routes.HOME, element: <Home /> },
  { path: routes.SERVICES, element: <Services /> },
  { path: routes.ABOUT_US, element: <AboutUs /> },
  { path: routes.LOGIN, element: <Login /> },
  { path: routes.REGISTER, element: <Register /> },
  { path: "/not-found", element: <NotFound /> },
  { path: "*", element: <Navigate replace to="/not-found" /> },
];

const router = createBrowserRouter(
  routeObjects.map((route) => ({
    path: route.path,
    element: route.element,
  }))
);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
