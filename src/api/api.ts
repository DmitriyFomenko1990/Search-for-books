import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: ` https://www.googleapis.com/books/v1/volumes?`,
});

export const booksAPI = {
    getBooks(filter:string, categories: string, start:number, sort:string) {
        return axiosInstance
            .get(`q=${filter}+subject:${categories}&startIndex=${start}&maxResults=30&orderBy=${sort}&key=${process.env.REACT_APP_API_KEY}`)
            .then(response =>  response)
    },
};
