import React, {useEffect, useState} from 'react';
import Loader from '../../loader/Loader';
import BooksPage from './BooksPage';
import {fetchBook} from "../../../store/redux/action-creators";
import {useDispatch} from "react-redux";
import {useRouteMatch} from "react-router-dom";

const BookPageContainer = () => {
    const [isFetch, setIsFetch] = useState(true);
    const dispatch = useDispatch();
    const { url } = useRouteMatch();

    const asyncFetch = async () => {
        await dispatch(fetchBook(url));
        setIsFetch(false);
    }

    useEffect(()=>{
        asyncFetch();
    },[]);
    return (
        isFetch
            ? <Loader />
            : <BooksPage isFetch={isFetch} setIsFetch={setIsFetch} />
    );
};

export default BookPageContainer;