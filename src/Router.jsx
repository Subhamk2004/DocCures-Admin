import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Router() {
    let { isAuthenticated } = useSelector(state => state.admin);

    return (
        <div className="h-[100%] ">
            {isAuthenticated ?

                <Navbar /> :
                null
            }
            <Outlet />
            {
                isAuthenticated ?
                    <Footer /> :
                    null
            }
        </div>
    );
}

export default Router;