import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { Dashlayout } from "../components"

export const dashElement = createBrowserRouter([
    {
        path: "/Dashboard",
        element: <Dashlayout />
    }
])