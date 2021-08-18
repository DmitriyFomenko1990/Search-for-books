import React from 'react';
import style from './content.module.scss';
import BooksList from '../BooksList';
import {BookStateType} from "../../../store/redux/books-reducer-types";
import {useTypedSelector} from "../../../store/redux/combine-reducers";
import Loader from "../../loader/Loader";

const Content: React.FC = () => {
    const booksState: BookStateType = useTypedSelector(state => state.bookReducer);
    const books = booksState.books;
    return (
       <div className={style.wrapper}>
           {books.length
               ?<BooksList />
               :<Loader />
           }
       </div>
    );
}

export default Content;