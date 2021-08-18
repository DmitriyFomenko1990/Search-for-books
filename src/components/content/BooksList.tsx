import React, {useEffect} from 'react';
import style from './books-list.module.scss';
import {BookStateType} from '../../store/redux/books-reducer-types';
import {useTypedSelector} from '../../store/redux/combine-reducers';
import Book from './book/Book';
import {fetchBooks} from "../../store/redux/action-creators";
import {useDispatch} from "react-redux";

const BooksList = () => {
    const dispatch = useDispatch();
    const booksState: BookStateType = useTypedSelector(state => state.bookReducer);
    const filter = booksState.filter;
    const sort = booksState.sort;
    const category = booksState.category;
    const currentPage = booksState.currentPage;
    const totalPages = booksState.totalPages;
    const books = booksState.books;
    let booksArray: any = [];
    console.log(booksState)

    useEffect(() => {
        debugger
        if (category === 'all') {
            dispatch(fetchBooks(filter, '', sort, currentPage, books, totalPages));
        } else {
            dispatch(fetchBooks(filter, category, sort, currentPage, books, totalPages));
        }
    }, []);

    debugger
    if (books !==[])  {
            booksArray =  books.map((book, index) =>  <Book book={book} key={index} />)
    }

    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>Found {booksState.totalItems} result</h3>
            <div className={style.booksContainer}>
                {booksArray
                ? booksArray
                : <div/>}
            </div>
        </div>
    );
};

export default BooksList;