import axios from "axios";
import { ITask } from "../App";

const API_URL_BASE = 'http://localhost:8080/task';

export const fetchTasks = async () => {
    
    try {
        const { data } = await axios.get(API_URL_BASE);
        
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const taskAdd = async (payload: ITask) => {
    try {
        const { data } = await axios.post(API_URL_BASE, payload);

        return data;
    } catch (err) {
        console.log(err);
    }
}   

export const taskDelete = async (_id: string) => {
    try {
        const { data } = await axios.delete(`${API_URL_BASE}/${_id}`);

        return data;
    } catch (err) {
        console.log(err);
    }
}

export const taskUpdate = async (_id: string, content: string, done: boolean) => {
    const options = { _id, content, done }
    
    try {
        const { data } = await axios.put(`${API_URL_BASE}/${_id}`, options);

        return data;
    } catch (err) {
        console.log(err);
    }
}