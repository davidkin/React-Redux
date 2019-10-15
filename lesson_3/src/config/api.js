import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com';

export const api = {
    getPosts: () => axios.get(`${API}/posts`),
    getPost: (id) => axios.get(`${API}/posts/${id}`)
}