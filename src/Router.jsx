import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import AlertDisplay from "./components/AlertDisplay";

function Router() {
    const { isLoading, error } = useAuth();
    let { isAuthenticated } = useSelector(state => state.admin);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <AlertDisplay />;
    }

    return (
        <div className="h-[100%] flex flex-row relative">
            {isAuthenticated && <Navbar />}
            <Outlet />
        </div>
    );
}

export default Router;