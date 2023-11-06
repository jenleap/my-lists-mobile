import { PropsWithChildren, createContext, useState } from "react";

export const AuthContext = createContext({
    token: "",
    isAuthenticated: false,
    signIn: (token: string) => {},
    signOut: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [ token, setAuthToken ] = useState("");

    const signIn = (token: string) => {
        setAuthToken(token);
    }

    const signOut = () => {
        setAuthToken("");
    }

    const isAuthenticated = token.length > 0;

    const value = { token, signIn, signOut, isAuthenticated };
    return <AuthContext.Provider value={ value }>{ children }</AuthContext.Provider>
}