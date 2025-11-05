import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseClick,
  onSubmit,
}) {
  return (
    <div
      className={`modal modal_type_add-garment ${
        activeModal === "add-garment" && "modal_opened"
      }`}
    >
      <div className="modal__container modal__container_type_add-garment">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          className="modal__close-btn"
          type="button"
          aria-label="close button"
        ></button>
        <form onSubmit={onSubmit} className="modal__form" id="add-garment-form">
          {children}
          <button
            type="submit"
            aria-label="submit button"
            className="modal__submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
