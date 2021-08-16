import {bookActions, booksActionsType, BookType, sort, category} from './books-reducer-types';
import {Dispatch} from 'redux';
import {booksAPI} from '../../api/api';

const setBooksActionCreator = (books: BookType[]): bookActions  => ({type: booksActionsType.FETCH_BOOKS, payload: books});
const setIsErrorActionCreator = (isError: boolean): bookActions  => ({type: booksActionsType.SET_ERROR, payload: isError});
const setFilterActionCreator = (filter: string): bookActions  => ({type: booksActionsType.SET_FILTER, payload: filter});
const setSortActionCreator = (sort: sort): bookActions  => ({type: booksActionsType.SET_SORT, payload: sort});
const setCategoryActionCreator = (category: category): bookActions  => ({type: booksActionsType.SET_CATEGORY, payload: category});
const setCurrentPageActionCreator = (page: number): bookActions  => ({type: booksActionsType.SET_CURRENT_PAGE, payload: page});
const setTotalPagesActionCreator = (pages: number): bookActions  => ({type: booksActionsType.SET_TOTAL_PAGES, payload: pages});
const setTotalItemsActionCreator = (items: number): bookActions  => ({type: booksActionsType.SET_TOTAL_ITEMS, payload: items});

export const dispatchFilter = (filter: string) => {
    return  (dispatch: Dispatch<bookActions>) =>{
        dispatch(setFilterActionCreator(filter));
    }
}
export const dispatchSort = (sort: sort) => {
    return  (dispatch: Dispatch<bookActions>) =>{
        dispatch(setSortActionCreator(sort));
    }
}
export const dispatchCategory = (category: category) => {
    return  (dispatch: Dispatch<bookActions>) =>{
        dispatch(setCategoryActionCreator(category));
    }
}

export const fetchBooks = (filter:string, categories: string, start:number, sort:string, prevState:BookType[], totalPages: number) => {
    return async (dispatch: Dispatch<bookActions>) =>{
        try {
            const response: any = await booksAPI.getBooks(filter, categories, start, sort);
            const state = [...prevState,...response.items];
            const nextPage= ++start;
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


