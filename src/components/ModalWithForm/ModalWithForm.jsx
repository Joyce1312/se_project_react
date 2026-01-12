import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonTextOne,
  buttonTextTwo,
  title,
  activeModal,
  handleCloseClick,
  onSubmit,
  modalType,
  formType,
}) {
  return (
    <div
      className={`modal modal_type_${modalType} ${
        activeModal === modalType && "modal_opened"
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
        <form onSubmit={onSubmit} className="modal__form" id={formType}>
          {children}
          <div className="modal__button-container">
            <button
              type="submit"
              aria-label="submit button"
              className="modal__submit"
            >
              {buttonTextOne}
            </button>
            {(modalType === "register" || modalType === "login") && (
              <button
                type="submit"
                aria-label={`${formType} button`}
                className="modal__second-btn"
              >
                {buttonTextTwo}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
