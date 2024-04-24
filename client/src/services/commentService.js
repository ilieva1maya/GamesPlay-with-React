import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export const create = async (id, username, text) => {
    const newComment = await request('POST', baseUrl, {
        id,
        username,
        text,
    });

    return newComment;
}

export const getAll = async (id) => {
    // This is the better solution, but it will works after migration to collection service
    // const query = new URLSearchParams({
    //     where: `id="${id}"`
    // })
    // const result = await request('GET', `${baseUrl}?${query}`);
    // return Object.values(result);

    // Temp solution
    const result = await request('GET', baseUrl);

    return Object.values(result).filter(comment => comment.id === id);
}