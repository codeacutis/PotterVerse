import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function PrivateRoute(){
    const { login } = useAuth();
    return login ? <Outlet /> : <Navigate to="/login" />;
}