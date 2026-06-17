import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState({});
    const [login, setLogin] = useState(() => localStorage.getItem('login') === 'true');

    function signIn(email, password){
        if(email === "admin@admin.com" && password === "Hp@Hogwarts2025!N0is&hz!ka"){
            setLogin(true);
            localStorage.setItem('login', 'true');
            return true;
        }
        setLogin(false);
        return false;
    }

    function signOut(){
        setLogin(false);
        localStorage.removeItem('login');
    }

    return(
        <AuthContext.Provider value={{signIn, signOut, login, user}}>
            {children}
        </AuthContext.Provider>
    )
}