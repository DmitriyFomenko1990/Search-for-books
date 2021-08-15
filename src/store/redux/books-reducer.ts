import {BookStateType} from "./books-reducer-types";

export const initialBooksState: BookStateType = {
    filter: '',
    category: "all",
    sort: "relevance",
    currentPage: 0,
    totalPages: 0,
    isServerError: false,
    books: []
};

const booksReducer = (state = initialBooksState, action: any): BookStateType => {
    switch (action.type) {
        default:
            return state
    }
};
export default booksReducer;