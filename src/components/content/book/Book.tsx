import React from 'react';
import style from './book.module.scss';

interface BookType {
    img: string;
    category: string;
    title: string;
    authors: string;
    id: number;
}
const Book: React.FC<BookType> = ({img,category,authors,title, id}) => {
    return (
       <div className={style.wrapper}>
           <img className={style.image} src={img}/>
           <p className={style.category}>{category}</p>
           <p className={style.title}>{title}</p>
           <p className={style.authors}>{authors}</p>
       </div>
    );
};

export default Book;