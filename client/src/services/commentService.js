import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/data/comments'

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
    const query = new URLSearchParams({
        where: `id="${id}"`
    })
    const result = await request('GET', `${baseUrl}?${query}`);
    return result;

    // Temp solution преи миграцията към collections
    // const result = await request('GET', baseUrl);

    // преди миграцията към collections, понеже връща обект
    // return Object.values(result).filter(comment => comment.id === id);
}