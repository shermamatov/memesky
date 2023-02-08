import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../components/Admin/Admin";
import Edit from "../components/Edit/Edit";
import Home from "../components/Home";
import { routeType } from "../types/types";

const MainRoutes = () => {
    const rout: routeType[] = [
        { link: "/", element: <Home />, id: 1 },
        { link: "/add", element: <Admin />, id: 2 },
        { link: "/edit/:id", element: <Edit />, id: 3 },
    ];
    return (
        <div>
            <Routes>
                {rout.map((item: routeType) => (
                    <Route
                        path={item.link}
                        element={item.element}
                        key={item.id}
                    />
                ))}
            </Routes>
        </div>
    );
};

export default MainRoutes;
