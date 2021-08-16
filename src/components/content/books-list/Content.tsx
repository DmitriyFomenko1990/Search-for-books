import React from 'react';
import style from './content.module.scss';
import BooksList from "../BooksList";


const Content: React.FC = () => {

    return (
       <div className={style.wrapper}>
            <BooksList />
       </div>
    );
};

export default Content;