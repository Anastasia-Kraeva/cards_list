import React from 'react';
import PostsList from './components/PostsList/PostsList';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Техническое задание фронтенд разработчика</h1>
      <h2>Подзаголовок, чтобы не пропускать заголовок "h2", но и не вписывать его в карточки</h2>
      <PostsList/>
    </div>
  );
}

export default App;
