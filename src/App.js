import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"; /* default import */
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

/* Lazy loading use optimize the application */
/*
Chunkin
code Splitting
lazy Loading
on demand loading
dynamic import
 */
const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Outlet /> {/* Outlet will filled whener is change the childer path */}
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)