import React from 'react';
import {BookStateType} from '../../../store/redux/books-reducer-types';
import {useTypedSelector} from '../../../store/redux/combine-reducers';
import Loader from '../../loader/Loader';
import BooksList from '../BooksList';

const BookListContainer = () => {
    const booksState: BookStateType = useTypedSelector(state => state.bookReducer);
    const books = booksState.books;
    return (
        books.length
            ? <BooksList booksState={booksState} />
            : <Loader />
    );
};

export default BookListContainer;