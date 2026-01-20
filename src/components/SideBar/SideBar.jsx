import { useContext } from "react";
import "./SideBar.css";
import avatar from "../../assets/avatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ openEditProfileModal }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__user-container">
          <div className="sidebar__user-info">
            <p className="sidebar__username">{currentUser.name}</p>
          </div>
          <img
            src={currentUser.avatar}
            alt="Terrence Tegegne"
            className="sidebar__avatar"
          />
        </div>
        <button
          onClick={openEditProfileModal}
          className="sidebar__change-data-btn"
        >
          Change profile data
        </button>
        <button className="sidebar__logout-btn">Log out</button>
      </aside>
    </>
  );
}

export default SideBar;
