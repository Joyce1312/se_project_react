import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

// `sidebar__user-container ${
//           isMobileMenuOpened ? "sidebar__user-container_active" : ""

function SideBar() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__user-container">
          <p className="sidebar__username">Terrence Tegegne</p>
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
