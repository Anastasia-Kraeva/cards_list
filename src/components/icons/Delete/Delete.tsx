import React, {FC} from 'react';

interface DeleteProps {
  onClick: () => void,
}

const Delete: FC<DeleteProps> = ({onClick}) => {
  return (
    <button className="button-icon" onClick={onClick}>
      <svg className="post-card_delete-icon" viewBox="0 0 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
      </svg>
    </button>
  );
};

export default Delete;
