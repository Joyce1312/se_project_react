import "./Profile.css";
import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ handleCardClick, clothingItems, handleAddClick }) {
  return (
    <>
      <section className="profile">
        <SideBar />
        <ClothesSection
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
        />
      </section>
    </>
  );
}

export default Profile;
