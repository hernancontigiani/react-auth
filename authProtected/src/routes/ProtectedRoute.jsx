import { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute() {
    const { auth } = useContext(AuthContext);

    if (!auth.auth) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" replace />
    }

    // authorized so return child components
    return <Outlet />;
}
