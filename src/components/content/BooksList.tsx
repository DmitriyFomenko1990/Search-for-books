import React from 'react';
import style from './books-list.module.scss';
import {BookStateType} from "../../store/redux/books-reducer-types";
import {useTypedSelector} from "../../store/redux/combine-reducers";
import Book from "./book/Book";



const BooksList = () => {
    const booksState: BookStateType = useTypedSelector(state => state.booksReducer);
    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>Found {booksState.totalItems} result</h3>
            <div className={style.booksContainer}>
            <Book authors="Jazon Dion Fletcher" title="Skull Flowers (Russian Language Edition)" id={1}
                    category="Fiction" img="http://books.google.com/books/content?id=6uHgDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"/>
            </div>
        </div>
    );
};

export default BooksList;