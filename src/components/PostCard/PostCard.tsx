import React, {FC} from 'react';
import {deleteCard, toggleIsFavorite} from '../../store/reducers/postsSlice';
import {useTypedDispatch} from '../../hooks/redux';
import {ICard} from '../../models/interfaces';
import Like from '../icons/Like/Like';
import Delete from '../icons/Delete/Delete';
import './styles.css';

interface PostItemProps {
  card: ICard
}

const PostCard: FC<PostItemProps> = ({card}) => {
  const dispatch = useTypedDispatch()

  const handleToggleLike = () => {
    dispatch(toggleIsFavorite({id: card.post.id, value: !(card.isFavorite)}))
  }

  const handleCardDelete = () => {
    dispatch(deleteCard(card.post.id))
  }

  return (
    <div className="post-card">
      <div className="post-card_buttons-wrapper">
        <Delete onClick={handleCardDelete}/>
        <Like onClick={handleToggleLike} isActive={card.isFavorite}/>
      </div>
      <div className="post-card_title-wrapper">
        <h3 className="post-card_title">{card.post.title}</h3>
      </div>
      <div className="post-card-img_wrapper">
        <img alt="photo"
             src={card.photo?.url || 'https://via.placeholder.com/600x600/e3b969'}/>
      </div>
      <p>{card.post.body}</p>
    </div>
  );
};

export default PostCard;
