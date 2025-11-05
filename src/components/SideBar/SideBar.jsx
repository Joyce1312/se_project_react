import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

// `sidebar__user-container ${
//           isMobileMenuOpened ? "sidebar__user-container_active" : ""

function SideBar() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__user-container">
          <div className="sidebar__user-info">
            <p className="sidebar__username">Terrence Tegegne</p>
            <button className="sidebar__change-data-btn">
              Change profile data
            </button>
            <button className="sidebar__logout-btn">Log out</button>
          </div>
          <img
            src={avatar}
            alt="Terrence Tegegne"
            className="sidebar__avatar"
          />
        </div>
      </aside>
    </>
  );
}

export default SideBar;
