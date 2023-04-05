import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { Dashlayout } from "../components/layout/DashLayout"

export const dashElement = createBrowserRouter([
    {
        path: "/dshboard",
        element: <Dashlayout />
    }
])