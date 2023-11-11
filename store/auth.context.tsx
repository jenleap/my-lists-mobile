import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { clearToken, getToken, saveToken } from "../utils/auth";


export const AuthContext = createContext({
    token: "",
    isAuthenticated: false,
    signIn: (token: string) => {},
    signOut: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [ token, setAuthToken ] = useState("");

    useEffect(() => {
        getToken().then((token) => {
            if (token) {
                setAuthToken(token);
            }
        })
    }, []);

    const signIn = (token: string) => {
        setAuthToken(token);
        saveToken(token);
    }

    const signOut = () => {
        setAuthToken("");   
        clearToken();
    }

    const isAuthenticated = token.length > 0;

    const value = { token, signIn, signOut, isAuthenticated };
    return <AuthContext.Provider value={ value }>{ children }</AuthContext.Provider>
}