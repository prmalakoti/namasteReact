import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import UserContext from "./utils/UserContext";
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
    const [userInfo, setUserInfo] = useState();
    //authentication
    useEffect(() => {
        //Make api call
        const data = {
            name: "Prashant Malakoti"
        }
        setUserInfo(data.name);
    }, [])
    return (
        <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
            <div className="app">
                <Header></Header>
                <Outlet /> {/* Outlet will filled whener is change the childer path */}
            </div>
        </UserContext.Provider>
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