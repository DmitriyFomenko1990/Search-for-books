import React from 'react';
import style from './content.module.scss';
import BooksList from '../BooksList';
import {Switch, Route} from 'react-router-dom';
import BooksPage from '../book-page/BooksPage';

const Content: React.FC = () => {
    return (
       <div className={style.wrapper}>
           <Switch>
               <Route exact path='/' render={() => <BooksList />}/>
               <Route path='/:bookId' render={() => <BooksPage/>}/>
           </Switch>
       </div>
    );
}

export default Content;