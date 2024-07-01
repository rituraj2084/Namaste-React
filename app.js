import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import About from './src/components/About';
import ContactUs from './src/components/ContactUs';
import Error from './src/components/Error';
import Cart from './src/components/Cart';
import RestaurantMenu from './src/components/RestaurantMenu';
// import Grocery from './src/components/Grocery';

const About = lazy(() => import('./src/components/About'));
const Grocery = lazy(() => import('./src/components/Grocery'));
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {' '}
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
