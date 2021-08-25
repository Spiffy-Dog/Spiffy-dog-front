import { lazy } from 'react';

const HomePage = lazy(
  () => import('./pages/HomePage') /*webpackChunkName: "home-page" */,
);
const AboutUsPage = lazy(
  () => import('./pages/AboutUsPage') /*webpackChunkName: "aboutUs-page" */,
);
const CartPage = lazy(
  () => import('./pages/CartPage') /*webpackChunkName: "cart-page" */,
);
const ContactsPage = lazy(
  () => import('./pages/ContactsPage') /*webpackChunkName: "cart-page" */,
);
const SizesPage = lazy(
  () => import('./pages/SizesPage') /*webpackChunkName: "contacts-page" */,
);
const StorePage = lazy(
  () => import('./pages/StorePage') /*webpackChunkName: "store-page" */,
);
const UserPage = lazy(() =>
  import('./pages/UserPage' /*webpackChunkName: "user-page" */),
);
const Page404 = lazy(() =>
  import('./pages/Page404' /*webpackChunkName: "404-page" */),
);

const routes = [
  {
    exact: true,
    path: '/',
    component: HomePage,
    isProtected: false,
  },
  {
    exact: true,
    path: '/about',
    label: '',
    component: AboutUsPage,
    isProtected: false,
  },
  {
    exact: true,
    path: '/cart',
    label: '',
    component: CartPage,
    isProtected: false,
  },
  {
    exact: true,
    path: '/contacts',
    label: '',
    component: ContactsPage,
    isProtected: false,
  },
  {
    exact: true,
    path: '/sizes',
    label: '',
    component: SizesPage,
    isProtected: false,
  },
  {
    exact: true,
    path: '/store',
    label: '',
    component: StorePage,
    isProtected: false,
  },
  {
    exact: true,
    path: '/user',
    label: '',
    component: UserPage,
    isProtected: true,
  },
  {
    component: Page404,
    isProtected: null,
  },
];

export default routes;
