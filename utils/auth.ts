import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiAuthUrl } from "./constants";

const TOKEN_KEY = "my-lists-token";

type SignInCreds = {
    username: string,
    password: string
};

export const getHeaders = () => {
    return {
        headers: { 
            Authorization: `Bearer ${ getToken() }` 
        }
    }
};

export const signIn = async ({ username, password }: SignInCreds) => {
    const res = await axios.post(`${ apiAuthUrl }/signin`, { username, password });

    console.log(res.data);

    return res.data.token;
}

export const saveToken = (token: string) => {
    AsyncStorage.setItem(TOKEN_KEY, token);
}

export const getToken = () => {
    return AsyncStorage.getItem(TOKEN_KEY);
}

export const clearToken = () => {
    AsyncStorage.removeItem(TOKEN_KEY);
}