import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/catalog'

export const getAll = async () => {
    // стандартен fetch
    // const response = await fetch(baseUrl);
    // const result = await response.json();
    // return result;

    // или абстракция с помощна fetch функция
    const result = await request('GET', baseUrl);
    // за да не ни върне и ключовете
    return Object.values(result);
}

export const create = async (gameData) => {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    })

    const result = await response.json();
    return result;
}