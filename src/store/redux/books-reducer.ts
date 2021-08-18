import {BookStateType, booksActionsType, bookActions} from './books-reducer-types';

export const initialBooksState: BookStateType = {
    filter: '',
    category: 'all',
    sort: 'relevance',
    currentPage: 0,
    totalPages: 0,
    isServerError: false,
    books: [],
    totalItems: 0,
};

const booksReducer = (state = initialBooksState, action: bookActions): BookStateType => {
    switch (action.type) {
        case booksActionsType.FETCH_BOOKS :
            return {...state, books: action.payload}
        case booksActionsType.SET_ERROR :
            return {...state, isServerError: action.payload}
        case booksActionsType.SET_FILTER:
            return {...state, filter: action.payload}
        case booksActionsType.SET_SORT:
            return {...state, sort: action.payload}
        case booksActionsType.SET_CATEGORY:
            return {...state, category: action.payload}
        case booksActionsType.SET_TOTAL_PAGES:
            return {...state, totalPages: action.payload}
        case booksActionsType.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case booksActionsType.SET_TOTAL_ITEMS:
            return {...state, totalItems: action.payload}
        default:
            return state
    }
};
export default booksReducer;