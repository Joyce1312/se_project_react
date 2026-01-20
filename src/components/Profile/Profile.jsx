import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  openEditProfileModal,
}) {
  return (
    <>
      <section className="profile">
        <SideBar openEditProfileModal={openEditProfileModal} />
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
