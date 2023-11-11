import axios from "axios";
import { getHeaders } from "./auth";
import { apiUrl } from "./constants";

type InviteBody = {
    userId: string;
    listId: string;
    note: string;
}

type AcceptInviteBody = {
    accept: boolean;
}


export const getInvites = async () => {
    const res = await axios.get(`${ apiUrl }/invites`, getHeaders());

    console.log(res.data);

    return res.data;
}

export const createInvite = async (body: InviteBody) => {
    const res = await axios.post(`${ apiUrl }/invites`, body, getHeaders());

    console.log(res.data);

    return res.data;
}

export const acceptInvite = async (body: AcceptInviteBody, listId: string) => {
    const res = await axios.put(`${ apiUrl }/invites/${ listId }`, body, getHeaders());

    console.log(res.data);

    return res.data;
}

export const getUsers = async () => {
    const res = await axios.get(`${ apiUrl }/users`, getHeaders());

    console.log(res.data);

    return res.data;
}

