interface ImageLinksTypes {
    smallThumbnail: string;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
}
interface VolumeInfoTypes {
    title?: string;
    authors?: string[];
    description?: string;
    categories?: string[];
    imageLinks: ImageLinksTypes;

}
export interface BookType {
    volumeInfo?: VolumeInfoTypes;
    id?: string;
}
export type category = "all" | "art" | "biography" | "computers" | "history" | "medical" | "poetry";
export type sort = "relevance" | "newest";
export interface BookStateType {
    filter: string;
    category: category;
    sort: sort;
    totalItems: number;
    currentPage: number;
    totalPages: number;
    isServerError: boolean;
    books: [] | BookType[];
    book: BookType;
}
export enum booksActionsType {
    FETCH_BOOKS = 'FETCH_BOOKS',
    FETCH_BOOK = 'FETCH_BOOK',
    SET_ERROR = 'SET_ERROR',
    SET_FILTER = 'SET_FILTER',
    SET_SORT = 'SET_SORT',
    SET_CATEGORY = 'SET_CATEGORY',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_PAGES = 'SET_TOTAL_PAGES',
    SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS'
}

interface FetchBooksAction{
    type: booksActionsType.FETCH_BOOKS;
    payload: BookType[];
}
interface FetchBookAction{
    type: booksActionsType.FETCH_BOOK;
    payload: BookType;
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
interface SetTotalPagesAction{
    type: booksActionsType.SET_TOTAL_PAGES;
    payload: number;
}
interface SetCurrentPageAction{
    type: booksActionsType.SET_CURRENT_PAGE;
    payload: number;
}
interface SetTotalItemsAction{
    type: booksActionsType.SET_TOTAL_ITEMS;
    payload: number;
}
export type bookActions = FetchBooksAction | FetchBookAction | SetErrorAction | SetFilterAction | SetSortAction | SetCategoryAction  | SetTotalPagesAction | SetCurrentPageAction | SetTotalItemsAction;
