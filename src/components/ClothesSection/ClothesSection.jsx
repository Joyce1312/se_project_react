import { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({ clothingItems, handleCardClick, handleAddClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__title">Your items</p>
        <button
          onClick={handleAddClick}
          className="clothes-section__add-btn"
          type="button"
          aria-label="Add new garment"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems
          .filter((item) => {
            return item.owner === currentUser._id;
          })
          .map((ownerItem) => {
            return (
              <ItemCard
                key={ownerItem._id}
                item={ownerItem}
                onCardClick={handleCardClick}
              />
            );
          })
          .reverse()}
      </ul>
    </div>
  );
}

export default ClothesSection;
