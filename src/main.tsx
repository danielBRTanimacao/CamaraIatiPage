import { createRoot } from "react-dom/client";
import { createRootRoute, createRoute, createRouter, RouterProvider } from "@tanstack/react-router";

import "./assets/css/Index.css";
import App from "./App.tsx";
import NotFound from "./pages/NotFound.tsx";

const rootRoute = createRootRoute({
  notFoundComponent: NotFound,
});

const routes = [
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: App,
  }),
];

const routeTree = rootRoute.addChildren(routes);
const router = createRouter({ routeTree });

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
