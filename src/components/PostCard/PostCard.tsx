import React, {FC} from 'react';
import {IPhoto, IPost} from '../../models/interfaces';

interface PostItemProps {
  post: IPost;
  photo: IPhoto | undefined;
}

const PostCard: FC<PostItemProps> = ({post, photo}) => {
  return (
    <div className="post-card">
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
