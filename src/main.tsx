import { createRoot } from 'react-dom/client';
import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';

import './assets/css/Index.css';

import NotFound from './pages/NotFound';
import App from './App';
import Municipio from './pages/landing/Municipio';
import Camara from './pages/landing/Camara';
import CouncilorsPage from './pages/landing/CouncilorsPage';
import ContentController from './pages/auth/content/ContentController';

const rootRoute = createRootRoute();

const routes = [
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: App,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/vereadores',
    component: CouncilorsPage,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/camara',
    component: Camara,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/municipio',
    component: Municipio,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/admin/content',
    component: ContentController,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '*',
    component: NotFound,
  }),
];

const routeTree = rootRoute.addChildren(routes);
const router = createRouter({ routeTree });

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
