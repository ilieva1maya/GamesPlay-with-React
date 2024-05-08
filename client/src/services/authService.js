import { request } from "../lib/request";
import Path from "../paths";

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request('POST', `${baseUrl}${Path.Login}`, {
        email,
        password,
    });

    return result;
}

export const register = async (email, password) => {
    const result = await request('POST', `${baseUrl}${Path.Register}`, {
        email,
        password,
    });

    return result;
}

export const logout = async () => {
    await request('GET', `${baseUrl}${Path.Logout}`);
}