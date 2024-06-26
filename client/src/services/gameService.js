import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/data/games'

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

export const getLatest = async () => {
    const query = new URLSearchParams({
        // sortBy: `_createdOn desc`,        
        offset: 0,
        pageSize: 2,
    })

    const result = await request('GET', `${baseUrl}?${query}`);

    // const query = encodeURIComponent(`offset=0&pageSize=2`);
    // const result = await request('GET', `${baseUrl}?sortBy=_createdOn%20desc&${query}`);

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

export const remove = async (id) => request('DELETE', `${baseUrl}/${id}`);