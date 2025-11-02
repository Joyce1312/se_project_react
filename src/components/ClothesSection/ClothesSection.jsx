import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, handleCardClick }) {
  return (
    <>
      <div className="clothes-section">
        <div className="clothes-section__row">
          <p className="clothes-section__title">Your items</p>
          <button
            className="clothes-section__add-btn"
            type="button"
            aria-label="Add new garment"
          >
            + Add new
          </button>
        </div>
        <ul className="clothes-section__items">
          {clothingItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ClothesSection;
