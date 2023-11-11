import axios from "axios";
import { getHeaders } from "./auth";
import { apiUrl } from "./constants";

type ListBody = {
    name: string;
};

type CreateItemBody = {
    label: string;
    listId: string;
}

type UpdateItemBody = {
    label: string;
    checked: string;
}

export const getLists = async () => {
    const res = await axios.get(`${ apiUrl }/lists`, getHeaders());

    console.log(res.data);

    return res.data;
}

export const getList = async (id: string) => {
    const res = await axios.get(`${ apiUrl }/lists/${ id }`, getHeaders());

    console.log(res.data);

    return res.data;
}

export const createList = async (body: ListBody) => {
    const res = await axios.post(`${ apiUrl }/lists`, body, getHeaders());

    console.log(res.data);

    return res.data;
}

export const updateList = async (id: string, body: ListBody) => {
    const res = await axios.put(`${ apiUrl }/lists/${ id }`, body, getHeaders());

    console.log(res.data);

    return res.data;
}

export const deleteList = async (id: string) => {
    const res = await axios.delete(`${ apiUrl }/lists/${ id }`, getHeaders());

    console.log(res.data);

    return res.data;
}

export const addItem = async (body: CreateItemBody) => {
    const res = await axios.post(`${ apiUrl }/items/${ body.listId }`, body, getHeaders());

    console.log(res.data);

    return res.data;
}

export const updateItem = async (body: UpdateItemBody, listId: string, itemId: string) => {
    const res = await axios.put(`${ apiUrl }/items/${ listId }/${ itemId }`, body, getHeaders());

    console.log(res.data);

    return res.data;
}

export const deleteItem = async (listId: string, itemId: string) => {
    const res = await axios.delete(`${ apiUrl }/items/${ listId }/${ itemId }`, getHeaders());

    console.log(res.data);

    return res.data;
}

