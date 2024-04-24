import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export const create = async(id, username, text) => {
    const newComment = await request('POST', baseUrl, {
        id,
        username,
        text,
    });

    return newComment;
}