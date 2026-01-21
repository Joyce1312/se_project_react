import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  const isLiked = item.likes.some((userId) => userId === currentUser._id);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <div onClick={handleCardClick} className="card">
      <div className="card__title-container">
        <h2 className="card__title">{item.name}</h2>
        {isLoggedIn && (
          <button
            onClick={handleLike}
            className={`card__like-btn ${
              isLiked ? "card__like-btn_active" : ""
            }`}
            aria-label="like button"
          ></button>
        )}
      </div>

      <img className="card__image" src={item.imageUrl} alt={item.name} />
    </div>
  );
}

export default ItemCard;
