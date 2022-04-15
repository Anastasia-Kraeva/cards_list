import React from 'react';
import PostCard from '../PostCard/PostCard';
import {useTypedSelector} from '../../hooks/redux';

const PostsList = () => {
  const {cards} = useTypedSelector(state => state.reducerCards)

  return (
    <div className="posts-list">
      {cards.map(card =>
        <PostCard key={card.post.id}
                  card={card}/>
      )}
    </div>
  );
};

export default PostsList;
