import React from 'react';
import PropTypes from 'prop-types';
import styled from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styled.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={styled.item}>
          <span className={friend.isOnline ? styled.online : styled.offline} />
          <img
            className={styled.avatar}
            src={friend.avatar}
            alt="avatar"
            width="48"
          />
          <p className={styled.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
