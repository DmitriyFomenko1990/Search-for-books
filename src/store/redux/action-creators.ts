import {bookActions, booksActionsType, BookType, sort, category} from './books-reducer-types';
import {Dispatch} from 'redux';
import {booksAPI} from '../../api/api';

export const fetchBooks = (
    filter:string,
    categories: string,
    sort:string,
    currentPage:number,
    prevState:BookType[],
    totalPages: number) => {
        return async (dispatch: Dispatch<bookActions>) =>{
            try {
                if (categories === 'all') {
                    categories = '';
                }
                const response: any = await booksAPI.getBooks(filter, categories, currentPage, sort);
                const state = [...prevState,...response.items];
                const nextPage= ++currentPage;
                if (totalPages !== response.totalItems) {
                    totalPages = Math.ceil(response.totalItems / 30)
                    dispatch(setTotalPagesActionCreator(totalPages));
                    dispatch(setTotalItemsActionCreator(response.totalItems));
                }
                dispatch(setBooksActionCreator(state));
                dispatch(setCurrentPageActionCreator(nextPage));
            } catch (err) {
                dispatch(setIsErrorActionCreator(true));
            }
        }
}

export const fetchBook = (id: string) => {
    return async (dispatch: Dispatch<bookActions>) =>{
        try {
            const response: BookType = await booksAPI.getBook(id);
            dispatch(setBookActionCreator(response));
        } catch (err) {
            dispatch(setIsErrorActionCreator(true));
        }
    }
}

export const dispatchFilter = (filter: string) => (dispatch: Dispatch<bookActions>) => {
    dispatch(setFilterActionCreator(filter));
}
export const dispatchSort = (sort: sort) =>  (dispatch: Dispatch<bookActions>) =>{
    dispatch(setSortActionCreator(sort));
}

export const dispatchCategory = (category: category) => (dispatch: Dispatch<bookActions>) =>{
    dispatch(setCategoryActionCreator(category));
}
export const dispatchBooks = (books: BookType[]) => (dispatch: Dispatch<bookActions>) =>{
    dispatch(setBooksActionCreator(books));
}
export const dispatchCurrentPage = (page: number) => (dispatch: Dispatch<bookActions>) =>{
    dispatch(setCurrentPageActionCreator(page));
}

const setBooksActionCreator = (books: BookType[]): bookActions  => ({type: booksActionsType.FETCH_BOOKS, payload: books});
const setBookActionCreator = (book: BookType): bookActions  => ({type: booksActionsType.FETCH_BOOK, payload: book});
const setIsErrorActionCreator = (isError: boolean): bookActions  => ({type: booksActionsType.SET_ERROR, payload: isError});
const setFilterActionCreator = (filter: string): bookActions  => ({type: booksActionsType.SET_FILTER, payload: filter});
const setSortActionCreator = (sort: sort): bookActions  => ({type: booksActionsType.SET_SORT, payload: sort});
const setCategoryActionCreator = (category: category): bookActions  => ({type: booksActionsType.SET_CATEGORY, payload: category});
const setCurrentPageActionCreator = (page: number): bookActions  => ({type: booksActionsType.SET_CURRENT_PAGE, payload: page});
const setTotalPagesActionCreator = (pages: number): bookActions  => ({type: booksActionsType.SET_TOTAL_PAGES, payload: pages});
const setTotalItemsActionCreator = (items: number): bookActions  => ({type: booksActionsType.SET_TOTAL_ITEMS, payload: items});