import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: ` https://www.googleapis.com/books/v1/`,
});

export const booksAPI = {
    getBooks(filter:string, categories: string, start:number, sort:string) {
        return axiosInstance
            .get(`volumes?q=${filter}+subject:${categories}&startIndex=${start}&maxResults=30&orderBy=${sort}&key=${process.env.REACT_APP_API_KEY}`)
            .then(response =>  response.data)
    },
    getBook(id: string) {
        return axiosInstance
            .get(`volumes/${id}`)
            .then(response =>  response.data)
    },
};
