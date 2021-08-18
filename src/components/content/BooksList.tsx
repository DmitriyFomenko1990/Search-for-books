import React, {useEffect, useState} from 'react';
import style from './books-list.module.scss';
import {BookStateType} from '../../store/redux/books-reducer-types';
import {useTypedSelector} from '../../store/redux/combine-reducers';
import Book from './book/Book';
import {fetchBooks} from "../../store/redux/action-creators";
import {useDispatch} from "react-redux";
import Loader from "../loader/Loader";

const BooksList = () => {
    const [isFetching, setIsFetching] = useState(false)
    const dispatch = useDispatch();
    const booksState: BookStateType = useTypedSelector(state => state.bookReducer);
    const filter = booksState.filter;
    const sort = booksState.sort;
    const category = booksState.category;
    const currentPage = booksState.currentPage;
    const totalPages = booksState.totalPages;
    const books = booksState.books;
    let booksArray: JSX.Element[] = [];

    if (books !== [])  {
        booksArray =  books.map((book, index) =>  <Book book={book} key={index} />)
    }
    console.log(booksState);

    const fetchNewBooks = async () => {
        if (category === 'all') {
            await dispatch(fetchBooks(filter, '', sort, currentPage, books, totalPages));
        } else {
            await dispatch(fetchBooks(filter, category, sort, currentPage, books, totalPages));
        }
        setIsFetching(false)
    }

    useEffect(() => {
        fetchNewBooks();
    }, []);

    useEffect(() => {
        if (isFetching) {
            fetchNewBooks();
        }
    }, [isFetching]);

    const fetchMoreBooks = () => {
        setIsFetching(true)
    }
    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>Found {booksState.totalItems} result</h3>
            <div className={style.booksContainer}>
                {booksArray}
            </div>
            {isFetching
                ? <Loader />
                : <button className={style.moreBtn} onClick={fetchMoreBooks}>More books</button>
            }
        </div>
    );
};

export default BooksList;