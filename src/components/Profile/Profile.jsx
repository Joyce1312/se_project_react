import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  openEditProfileModal,
  isMobileMenuOpened,
  toggleMobileMenu,
}) {
  return (
    <>
      <section className="profile">
        <SideBar
          openEditProfileModal={openEditProfileModal}
          isMobileMenuOpened={isMobileMenuOpened}
          toggleMobileMenu={toggleMobileMenu}
        />
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
