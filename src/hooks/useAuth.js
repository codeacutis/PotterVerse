import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth(){
    const provider = useContext(AuthContext)

    if(!provider){
        throw new Error("useAuth must be within AuthProvider")
    }
    return provider
}