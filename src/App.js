import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand loading
// Make your app into smaller chunks

const Grocery = lazy(() => import("./components/Grocery"));

/*
    1. Add a logo on the left side
    2. Add a search bar in middle
    3. Add User icon on right
    4. Add CSS to look it nice
*/

/**
 *
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Bar
 *  - Restaurant Container
 *      - Restaurant Cards
 *        - Image
 *        - Name
 *        - Star Rating
 *        - Cuisines
 *        - Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

// Outlet -> Renders the child route's element, if there is one.

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
