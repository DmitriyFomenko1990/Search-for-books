import React, {useEffect, useState} from 'react';
import style from './header.module.scss';
import {BookStateType, category, sort} from '../../store/redux/books-reducer-types';
import {
    dispatchBooks,
    dispatchCategory,
    dispatchFilter,
    dispatchSort,
    fetchBooks
} from "../../store/redux/action-creators";
import {useTypedSelector} from "../../store/redux/combine-reducers";
import {useDispatch} from "react-redux";
//TODO: change useEffect deps

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [sort, setSort] = useState<sort>('relevance');
    const [category, setCategory] = useState<category>('all');
    const [i, setI] = useState(0);

    const booksState: BookStateType = useTypedSelector(state => state.bookReducer);
    const currentPage = booksState.currentPage;
    const totalPages = booksState.totalPages;
    const books = booksState.books;

    useEffect(()=>{
        dispatch(dispatchBooks([]))
        dispatch(dispatchSort(sort));
        dispatch(dispatchCategory(category));
        dispatch(dispatchFilter(inputValue));
        if (category === 'all') {
            dispatch(fetchBooks(inputValue, '', sort, currentPage, books, totalPages));
        } else {
            dispatch(fetchBooks(inputValue, category, sort, currentPage, books, totalPages));
        }
    }, [i])

    const onHandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setI(i => i+1)
    };

    const onHandleChange = (e:React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    };
    const onCategoryChange = (e: any) => {
        setCategory(e.currentTarget.value)
    }
    const onSortChange = (e: any) => {
        setSort(e.currentTarget.value)
    }
    return (
        <header className={style.wrapper}>
            <h1 className={style.title}>Search for books</h1>
            <form className={style.form} onSubmit={onHandleSubmit}>
                <input className={style.textInput} type='text'
                       value={inputValue} onChange={onHandleChange}/>
                <div className={style.selectsWrapper}>
                    <label className={style.label}>
                        Categories
                        <select className={style.selectInput} value={category}
                                onChange={onCategoryChange}>
                            <option value="all">all</option>
                            <option value="art">art</option>
                            <option value="biography">biography</option>
                            <option value="computers">computers</option>
                            <option value="history">history</option>
                            <option value="medical">medical</option>
                            <option value="poetry">poetry</option>
                        </select>
                    </label>
                    <label  className={style.label}>
                        Sorting by
                        <select className={style.selectInput} value={sort}
                                onChange={onSortChange}>
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </label>
                    <button className={style.submitBtn} type='submit' />
                </div>

            </form>
        </header>
    );
};

export default Header;