import React from 'react';
import {jsonPlaceholderApi} from '../../services/JsonPlaceholderApi';
import PostCard from '../PostCard/PostCard';

const PostsList = () => {
  const postsNumber = 3
  const {data: posts, error, isLoading} = jsonPlaceholderApi.useFetchAllPostsQuery(postsNumber)
  // прошу прощения если сделала глупость, но у третьего объекта, по ссылке заглушка вырвиглазного зеленого цвета
  const {data: photos, isLoading: photosIsLoading} = jsonPlaceholderApi.useFetchAllPhotosQuery(postsNumber-1)

  return (
    <>
      {(isLoading || photosIsLoading) && <h1>Идет загрузка...</h1>}
      {!!error && <h1>Произошла ошибка при загрузке данных</h1>}
      <div className="posts-list">
        {posts?.map((post, i) =>
          <PostCard key={post.id}
                    post={post}
                    photo={photos?.[i]}/>
        )}
      </div>
    </>
  );
};

export default PostsList;
