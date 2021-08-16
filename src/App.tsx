import React from 'react';
import styles from './App.module.scss';
import Header from "./components/header/Header";
import Content from "./components/content/books-list/Content";

function App()  {
  return (
    <div className={styles.App}>
        <Header sort="relevance" category="all" />
        <Content />
    </div>
  );
}

export default App;
