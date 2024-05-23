import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/data/games-catalog'

export const getAll = async () => {
    // стандартен fetch
    // const response = await fetch(baseUrl);
    // const result = await response.json();
    // return result;

    // или абстракция с помощна fetch функция
    const result = await request('GET', baseUrl);
    // за да не ни върне и ключовете (това е приложимо само за jsonstore)
    // return Object.values(result);
    return result;
}

export const getOne = async (id) => {
    const result = await request('GET', `${baseUrl}/${id}`);
    return result;
}

export const create = async (gameData) => {
    // стандартен fetch
    // const response = await fetch(baseUrl, {
    //     method: "POST",
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(gameData)
    // })
    // const result = await response.json();
    // return result;

    // или абстракция с помощна fetch функция
    const result = await request('POST', baseUrl, gameData);

    return result
}

export const edit = async (id, gameData) => {
    const result = await request('PUT', `${baseUrl}/${id}`, gameData);

    return result
}