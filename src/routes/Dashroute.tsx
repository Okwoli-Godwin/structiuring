import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { Dashboardlayout } from "../components"

export const dashElement = createBrowserRouter([
    {
        path: "/dash",
        element: <Dashboardlayout />
    }
])