import {combineReducers} from "redux";
import booksReducer from "./books-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const reducers = combineReducers({
    bookReducer: booksReducer,
});

export type bookState = ReturnType<typeof reducers>;

export  const useTypedSelector: TypedUseSelectorHook<bookState> = useSelector;