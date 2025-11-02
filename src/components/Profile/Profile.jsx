import "./Profile.css";
import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile() {
  return (
    <>
      <section className="profile">
        <SideBar />
        <ClothesSection />
      </section>
    </>
  );
}

export default Profile;
