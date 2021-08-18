import React from 'react';
import style from './books-page.module.scss';
import {BookStateType} from '../../../store/redux/books-reducer-types';
import {useTypedSelector} from '../../../store/redux/combine-reducers';

interface BooksPageType {
    isFetch: boolean;
    setIsFetch:  React.Dispatch<React.SetStateAction<boolean>>;
}

const BooksPage: React.FC<BooksPageType> = ({isFetch,setIsFetch}) => {
    const booksState: BookStateType = useTypedSelector(state => state.bookReducer);
    const categories = booksState.book.volumeInfo?.categories?.join(' / ');
    const  title = booksState.book.volumeInfo?.title;
    const  authors = booksState.book.volumeInfo?.authors?.join(', ');
    let  description: string = '';
    if (booksState.book.volumeInfo?.description){
        description = booksState.book.volumeInfo?.description;
    }
    function createDescriptionElement() {
        return {
            __html: description };
    };

    return (
        <div className={style.wrapper}>
            <div className={style.coverWrapper}>
                <img className={style.bookImage} src={booksState.book.volumeInfo?.imageLinks?.thumbnail} />
            </div>
            <div className={style.aboutWrapper}>
                <p className={style.categories}>{categories}</p>
                <h3 className={style.title}>{title}</h3>
                <p className={style.authors}>{authors}</p>
                <div className={style.descWrapper}>
                    <div className={style.description} dangerouslySetInnerHTML={createDescriptionElement()}></div>
                </div>
            </div>
        </div>
    );
};

export default BooksPage;