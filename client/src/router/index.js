import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import JobListPage from "../pages/JobListPage";
import JobDetailPage from "../pages/JobDetailPage";
import NotFound404Page from "../pages/NotFound404Page";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
        loader: () => {
            if (localStorage.access_token) {
                return redirect("/");
            }
            return <LoginPage />;
        }
    },
    {
        path: "/",
        element: <HomePage />,
        loader: () => {
            if (!localStorage.access_token) {
                return redirect("/login");
            }
            return <HomePage />;
        },
        children: [
            {
                path: "",
                element: <JobListPage />
            },
            {
                path: "/jobs/:id",
                element: <JobDetailPage />
            },
            {
                path: "*",
                element: <NotFound404Page />
            },
        ]
    }
])

export default router;
