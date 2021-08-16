import React, {useState} from 'react';
import style from './header.module.scss';
import {category, sort} from "../../store/redux/books-reducer-types";


interface HeaderType{
    sort: sort;
    category: category;
}
const Header: React.FC<HeaderType> = ({sort, category}) => {
    const [inputValue, setInputValue] = useState('');

    const onHandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
    const onHandleChange = (e:React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    };

    return (
        <header className={style.wrapper}>
            <h1 className={style.title}>Search for books</h1>
            <form className={style.form} onSubmit={onHandleSubmit}>
                <input className={style.textInput} type='text'
                       value={inputValue} onChange={onHandleChange}/>
                <div>
                    <label className={style.label}>
                        Categories
                        <select className={style.selectInput} value={category}>
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
                        <select className={style.selectInput} value={sort}>
                            <option value="relevance ">relevance</option>
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