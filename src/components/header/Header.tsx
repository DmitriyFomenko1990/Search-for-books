import React, {useEffect, useState} from 'react';
import style from './header.module.scss';
import {category, sort} from '../../store/redux/books-reducer-types';
import {
    dispatchBooks,
    dispatchCategory, dispatchCurrentPage,
    dispatchFilter,
    dispatchSort,
} from '../../store/redux/action-creators';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [inputValue, setInputValue] = useState('');
    const [sort, setSort] = useState<sort>('relevance');
    const [category, setCategory] = useState<category>('all');
    const [isSearch, setIsSearch] = useState(false);

    useEffect(()=>{
        if (isSearch) {
            dispatch(dispatchSort(sort));
            dispatch(dispatchCategory(category));
            dispatch(dispatchFilter(inputValue));
            dispatch(dispatchCurrentPage(1))
            dispatch(dispatchBooks( []));
            setIsSearch(false);
            history.push("/");
        }
    }, [isSearch])

    const onHandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSearch(true);
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