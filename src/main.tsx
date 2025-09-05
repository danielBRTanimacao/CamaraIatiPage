import { createRoot } from "react-dom/client";
import { createRootRoute, createRoute, createRouter, RouterProvider } from "@tanstack/react-router";

import "./assets/css/Index.css";

import NotFound from "./pages/NotFound.tsx";
import App from "./App.tsx";
import Municipio from "./pages/landing/Municipio.tsx";

const rootRoute = createRootRoute({
  notFoundComponent: NotFound,
});

const routes = [
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: App,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/municipio",
    component: Municipio,
  }),
];

const routeTree = rootRoute.addChildren(routes);
const router = createRouter({ routeTree });

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
