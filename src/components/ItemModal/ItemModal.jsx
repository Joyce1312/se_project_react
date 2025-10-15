import "./ItemModal.css";

function ItemModal({ activeModal, card, handleCloseCLick }) {
  return (
    <div
      className={`modal modal_type_preview ${
        activeModal === "preview" && "modal_opened"
      }`}
    >
      <div className="modal__container modal__container_type_preview">
        <button
          onClick={handleCloseCLick}
          className="modal__close-btn modal__close-btn_type_preview"
          aria-label="Close Preview Button"
          type="button"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
