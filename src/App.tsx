import React, {useEffect} from 'react';
import {useTypedDispatch, useTypedSelector} from './hooks/redux';
import {jsonPlaceholderApi} from './services/JsonPlaceholderApi';
import {createCard, toggleShowFavoritesOnly} from './store/reducers/postsSlice';
import {IPost} from './models/interfaces';
import './App.css';

import PostsList from './components/PostsList/PostsList';
import Filter from './components/icons/Filter/Filter';

function App() {
  const postsNumber = 3
  const {data: posts, error, isLoading} = jsonPlaceholderApi.useFetchAllPostsQuery(postsNumber)
  // прошу прощения если сделала глупость, но у третьего объекта, по ссылке заглушка вырвиглазного зеленого цвета
  const {data: photos, isLoading: photosIsLoading} = jsonPlaceholderApi.useFetchAllPhotosQuery(postsNumber - 1)
  const {isShowFavoritesOnly} = useTypedSelector(state => state.reducerCards)

  const dispatch = useTypedDispatch()

  const toggleShowFavorites = () => {
    dispatch(toggleShowFavoritesOnly(!isShowFavoritesOnly))
  }

  useEffect(() => {
    if (posts && photos) {
      posts.forEach((post: IPost, i: number) => {
        dispatch(createCard({
          post,
          photo: photos?.[i],
          isFavorite: false
        }))
      })
    }
  }, [posts, photos])

  return (
    <>
      {(isLoading || photosIsLoading) && <h1>Идет загрузка...</h1>}
      {!!error && <h1>Произошла ошибка при загрузке данных</h1>}
      {posts &&
      <div className="container">
        <h1>Техническое задание фронтенд разработчика</h1>
        <h2>Подзаголовок, чтобы не пропускать заголовок "h2", но и не вписывать его в карточки</h2>
        <div className="filter-wrapper">
          <Filter onMouseDown={toggleShowFavorites}
                  onMouseUp={toggleShowFavorites}
          />
        </div>
        <PostsList/>
      </div>}
    </>
  );
}

export default App;
