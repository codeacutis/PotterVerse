import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState({});
    const [login, setLogin] = useState(false);

    function signIn(email, password){
        if(email === "admin@admin.com" && password === "admin"){
            setLogin(true);
            return true;
        }
        setLogin(false);
        return false;
    }

    function signOut(){
        setLogin(false)
    }

    return(
        <AuthContext.Provider value={{signIn, signOut, login, user}}>
            {children}
        </AuthContext.Provider>
    )
}