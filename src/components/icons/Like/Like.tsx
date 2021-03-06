import React, {FC} from 'react';
import './styles.css';

interface LikeProps {
  onClick: () => void,
  isActive: boolean,
}

const Like: FC<LikeProps> = ({onClick, isActive}) => {
  const style = isActive ? {stroke: '#df7487', fill: '#df7487'} : {}

  return (
    <button className="button-icon button-icon-like">
      <svg className="post-card_like-icon" style={style} onClick={onClick} viewBox="0 0 24 24">
        <path
          d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
        </path>
      </svg>
    </button>
  );
};

export default Like;
