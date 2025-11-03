import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <div onClick={handleCardClick} className="card">
      <h2 className="card__title">{item.name}</h2>
      <img className="card__image" src={item.imageUrl} alt={item.name} />
    </div>
  );
}

export default ItemCard;
