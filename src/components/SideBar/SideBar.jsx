import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SideBar.css";
import avatar from "../../assets/avatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ openEditProfileModal }) {
  const { currentUser, setIsLoggedIn, setCurrentUser } =
    useContext(CurrentUserContext);
  const navigate = useNavigate();

  function handleSignOut() {
    localStorage.removeItem("jwt");
    navigate("/");
    setCurrentUser({});
    setIsLoggedIn(false);
  }

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__user-container">
          <div className="sidebar__user-info">
            <p className="sidebar__username">{currentUser.name}</p>
            <div className="sidebar__btn-containter sidebar__btn-containter_mobile">
              <button
                onClick={openEditProfileModal}
                className="sidebar__change-data-btn"
              >
                Change profile data
              </button>
              <button onClick={handleSignOut} className="sidebar__logout-btn">
                Log out
              </button>
            </div>
          </div>
          {currentUser.avatar ? (
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="sidebar__avatar"
            />
          ) : (
            <div className="sidebar__avatar sidebar__avatar-placeholder">
              {currentUser.name?.charAt(0)?.toUpperCase()}
            </div>
          )}
        </div>
        <div className="sidebar__btn-containter sidebar__btn-containter_desktop">
          <button
            onClick={openEditProfileModal}
            className="sidebar__change-data-btn"
          >
            Change profile data
          </button>
          <button onClick={handleSignOut} className="sidebar__logout-btn">
            Log out
          </button>
        </div>
        {/* <button
          onClick={openEditProfileModal}
          className="sidebar__change-data-btn"
        >
          Change profile data
        </button>
        <button onClick={handleSignOut} className="sidebar__logout-btn">
          Log out
        </button> */}
      </aside>
    </>
  );
}

export default SideBar;
