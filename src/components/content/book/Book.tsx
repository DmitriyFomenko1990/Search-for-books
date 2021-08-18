import React from 'react';
import style from './book.module.scss';
import {BookType} from '../../../store/redux/books-reducer-types';

const Book: React.FC<{ book: BookType }> = ({book}) => {
    const image = book.volumeInfo.imageLinks?.thumbnail?.length ?  book.volumeInfo.imageLinks?.thumbnail : '';
    const bookCategories = book.volumeInfo.categories?.length ? book.volumeInfo.categories[0] : '';
    const bookTitle = book.volumeInfo.title?.length ? book.volumeInfo.title : '';
    const bookAuthors =  book.volumeInfo.authors?.length ? book.volumeInfo.authors?.toString() : '';
    return (
       <div className={style.wrapper}>
           <img className={style.image} src={image}/>
           <p className={style.category}>{bookCategories}</p>
           <p className={style.title}>{bookTitle}</p>
           <p className={style.authors}>{bookAuthors}</p>
       </div>
    );
};

export default Book;