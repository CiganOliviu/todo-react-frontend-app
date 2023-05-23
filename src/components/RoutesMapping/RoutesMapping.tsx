import { pageRoutes } from "../../utils/dataStructures";
import { LoginScreen } from "../Authentication/LoginScreen/LoginScreen";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { RegisterScreen } from "../Authentication/RegisterScreen/RegisterScreen";
import { Tasks } from "../Tasks/Tasks";

export const RoutesMapping = () => {
    const pageRoutesMapping = [
        { path: pageRoutes.LOGIN, component: <LoginScreen /> },
        { path: pageRoutes.REGISTER, component: <RegisterScreen /> },
        { path: pageRoutes.HOME, component: <Tasks /> }
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