import axios from "axios"

type SignInCreds = {
    username: string,
    password: string
};

export const signIn = async ({ username, password }: SignInCreds) => {
    const res = await axios.post("http://localhost:3003/signin", { username, password });

    console.log(res.data);

    return res.data.token;
}