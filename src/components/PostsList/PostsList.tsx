import React from 'react';
import {useTypedSelector} from '../../hooks/redux';
import {ICard} from '../../models/interfaces';
import './styles.css';

import PostCard from '../PostCard/PostCard';

const PostsList = () => {
  const {isShowFavoritesOnly} = useTypedSelector(state => state.reducerCards)
  const cards = useTypedSelector(state => selectCards(state.reducerCards.cards, isShowFavoritesOnly))

  function selectCards(cards: ICard[], isShowFavoritesOnly: boolean): ICard[] {
    if (isShowFavoritesOnly) {
      return cards.filter(card => card.isFavorite)
    }
    return cards
  }

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
