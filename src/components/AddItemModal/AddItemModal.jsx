import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function AddItemModal({ activeModal, handleCloseClick, onAddItem }) {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weather: "",
  };
  const { values, handleChange, handleReset } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values, handleReset);
  }
  return (
    <>
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        activeModal={activeModal}
        handleCloseClick={handleCloseClick}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name-input" className="modal__label">
          Name
          <input
            type="text"
            name="name"
            className="modal__input"
            id="name-input"
            placeholder="Name"
            minLength={3}
            maxLength={50}
            required
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <span className="modal__error" id="name-input-error"></span>
        <label htmlFor="image-input" className="modal__label">
          Image
          <input
            type="url"
            name="imageUrl"
            className="modal__input"
            id="image-input"
            placeholder="Image URL"
            required
            value={values.imageUrl}
            onChange={handleChange}
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
              checked={values.weather === "hot"}
              onChange={handleChange}
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
              checked={values.weather === "warm"}
              onChange={handleChange}
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
              checked={values.weather === "cold"}
              onChange={handleChange}
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </>
  );
}

export default AddItemModal;
