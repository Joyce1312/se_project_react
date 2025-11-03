import "./ItemModal.css";

function ItemModal({ activeModal, card, handleCloseClick, handleDeleteClick }) {
  return (
    <div
      className={`modal modal_type_preview ${
        activeModal === "preview" && "modal_opened"
      }`}
    >
      <div className="modal__container modal__container_type_preview">
        <button
          onClick={handleCloseClick}
          className="modal__close-btn modal__close-btn_type_preview"
          aria-label="Close Preview Button"
          type="button"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-row">
            <h2 className="modal__caption">{card.name}</h2>
            <button
              onClick={handleDeleteClick}
              className="modal__del-btn"
              type="button"
              aria-label="delete item button"
            ></button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
