import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseCLick,
}) {
  return (
    <>
      <div
        className={`modal ${activeModal === "add-garment" && "modal_opened"}`}
      >
        <div className="modal__container">
          <h2 className="modal__title">{title}</h2>
          <button
            onClick={handleCloseCLick}
            className="modal__close-btn"
            type="button"
            aria-label="close button"
          ></button>
          <form className="modal__form" id="add-garment-form">
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
    </>
  );
}

export default ModalWithForm;
