import { pageRoutes } from "../../utils/dataStructures";
import { LoginScreen } from "../LoginScreen/LoginScreen";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const RoutesMapping = () => {
    const pageRoutesMapping = [
        { path: pageRoutes.LOGIN, component: <LoginScreen /> },
    ]

    return (
        <Routes>
            {pageRoutesMapping.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.component}
                    />
                )
            })}
        </Routes>
    )
};