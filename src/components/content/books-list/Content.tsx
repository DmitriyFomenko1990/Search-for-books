import React from 'react';
import style from './content.module.scss';
import {Switch, Route} from 'react-router-dom';
import BookListContainer from './BookListContainer';
import BookPageContainer from '../book-page/BookPageContainer';

const Content: React.FC = () => {
    return (
       <div className={style.wrapper}>
           <Switch>
               <Route exact path='/' render={() => <BookListContainer />}/>
               <Route path='/:bookId' render={() => <BookPageContainer/>}/>
           </Switch>
       </div>
    );
}

export default Content;