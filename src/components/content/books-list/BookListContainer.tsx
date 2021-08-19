import React, {useEffect, useState} from 'react';
import {BookStateType} from '../../../store/redux/books-reducer-types';
import {useTypedSelector} from '../../../store/redux/combine-reducers';
import Loader from '../../loader/Loader';
import BooksList from '../BooksList';
import {useDispatch} from 'react-redux';
import {fetchBooks} from '../../../store/redux/action-creators';

const BookListContainer = () => {
    const dispatch = useDispatch();
    const booksState: BookStateType = useTypedSelector(state => state.bookReducer);
    const filter = booksState.filter;
    const sort = booksState.sort;
    const category = booksState.category;
    const currentPage = booksState.currentPage;
    const totalPages = booksState.totalPages;
    const books = booksState.books;
    debugger
    useEffect(() => {
        dispatch(fetchBooks(filter, category, sort, currentPage, books, totalPages));
    }, [filter, sort, category]);
    return (
        books.length
            ? <BooksList booksState={booksState} />
            : <Loader />
    );
};

export default BookListContainer;