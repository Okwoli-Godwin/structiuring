import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import {element} from "./routes/Allroutes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Loading from "./components/Loading";
import { dashElement } from "./routes/Dashroute";

const client = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<Suspense fallback={<Loading />}>
			<QueryClientProvider client={client}>
        <RouterProvider router={element} />
        <RouterProvider router={dashElement} />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</Suspense>

		{/* <App /> */}
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();