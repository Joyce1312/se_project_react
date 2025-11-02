import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ activeModal, handleCloseClick, handleSubmit }) {
  return (
    <>
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        activeModal={activeModal}
        handleCloseClick={handleCloseClick}
        onsubbmit={handleSubmit}
      >
        <label htmlFor="name-input" className="modal__label">
          Name
          <input
            type="text"
            className="modal__input"
            id="name-input"
            placeholder="Name"
            minLength={3}
            maxLength={50}
            required
          />
        </label>
        <span className="modal__error" id="name-input-error"></span>
        <label htmlFor="image-input" className="modal__label">
          Image
          <input
            type="url"
            className="modal__input"
            id="image-input"
            placeholder="Image URL"
            required
          />
        </label>
        <span className="modal__error" id="image-input-error"></span>
        <fieldset className="modal__radio-btn">
          <legend className="modal__legend">Select your weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              type="radio"
              className="modal__radio-input"
              id="hot"
              name="weather"
              value="hot"
            />
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              className="modal__radio-input"
              id="warm"
              name="weather"
              value="warm"
            />
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              className="modal__radio-input"
              id="cold"
              name="weather"
              value="cold"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </>
  );
}

export default AddItemModal;
