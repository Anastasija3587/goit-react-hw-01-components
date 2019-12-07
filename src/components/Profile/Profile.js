import React from 'react';
import PropTypes from 'prop-types';
import styled from './Profile.module.css';

const Profile = ({ user }) => (
  <div className={styled.profile}>
    <div className={styled.description}>
      <img src={user.avatar} alt="user avatar" className={styled.avatar} />
      <p className={styled.name}>{user.name}</p>
      <p className={styled.tag}>{user.tag}</p>
      <p className={styled.location}>{user.location}</p>
    </div>

    <ul className={styled.stats}>
      <li className={styled.item}>
        <span className={styled.label}>Followers</span>
        <span className={styled.quantity}>{user.stats.followers}</span>
      </li>
      <li className={styled.item}>
        <span className={styled.label}>Views</span>
        <span className={styled.quantity}>{user.stats.views}</span>
      </li>
      <li className={styled.item}>
        <span className={styled.label}>Likes</span>
        <span className={styled.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape(PropTypes.number.isRequired),
  }).isRequired,
};

export default Profile;
