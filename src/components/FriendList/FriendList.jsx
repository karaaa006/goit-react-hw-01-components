import PropTypes from "prop-types";
import s from "./FriendList.module.scss";

export function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={s.item} key={id}>
          <span className={`${s.status} ${isOnline && s.isOnline}`}></span>
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
