interface VolumeInfoTypes {
    title: string;
    subtitle: string;
    authors: string[];
}
interface ImageLinksTypes {
    smallThumbnail: string;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
}
export interface BookType {
    volumeInfo: VolumeInfoTypes;
    imageLinks: ImageLinksTypes;
    id: string;
    description: string;
    categories: string[];
}
type category = "all" | "art" | "biography" | "computers" | "history" | "medical" | "poetry";
type sort = "relevance" | "newest";
export interface BookStateType {
    filter: string;
    category: category;
    sort: sort;
    currentPage: number;
    totalPages: number;
    isServerError: boolean;
    books: [] | BookType[];
}
export enum booksActionsType {
    FETCH_BOOKS = 'FETCH_BOOKS',
    SET_ERROR = 'SET_ERROR',
    SET_FILTER = 'SET_FILTER',
    SET_SORT = 'SET_SORT',
    SET_CATEGORY = 'SET_CATEGORY',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_PAGE = 'SET_TOTAL_PAGE'
}

interface FetchBooksAction{
    type: booksActionsType.FETCH_BOOKS;
    payload: BookType[];
}
interface SetErrorAction{
    type: booksActionsType.SET_ERROR;
    payload: boolean;
}
interface SetFilterAction{
    type: booksActionsType.SET_FILTER;
    payload: string;
}
interface SetSortAction{
    type: booksActionsType.SET_SORT;
    payload: sort;
}
interface SetCategoryAction{
    type: booksActionsType.SET_CATEGORY;
    payload: category;
}
interface SetTotalPageAction{
    type: booksActionsType.SET_TOTAL_PAGE;
    payload: number;
}
interface SetCurrentPageAction{
    type: booksActionsType.SET_CURRENT_PAGE;
    payload: number;
}

export type bookActions = FetchBooksAction | SetErrorAction | SetFilterAction | SetSortAction | SetCategoryAction  | SetTotalPageAction | SetCurrentPageAction;
