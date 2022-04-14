import React, {FC} from 'react';
import {IPhoto, IPost} from '../../models/interfaces';
import Like from '../icons/Like/Like';

interface PostItemProps {
  post: IPost;
  photo: IPhoto | undefined;
}

const PostCard: FC<PostItemProps> = ({post, photo}) => {
  const [isFavorite, setIsFavorite]=React.useState(false)

  const handleToggleLike = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="post-card">
      <Like onClick={handleToggleLike} isActive={isFavorite}/>
      <div className="post-card_title-wrapper">
        <h3 className="post-card_title">{post.title}</h3>
      </div>
      <div className="post-card-img_wrapper">
        <img alt="photo"
             src={photo?.url || 'https://via.placeholder.com/600x600/e3b969'}/>
      </div>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
