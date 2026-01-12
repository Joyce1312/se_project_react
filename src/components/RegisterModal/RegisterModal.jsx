import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function RegisterModal({ activeModal, handleCloseClick }) {
  const defaultValues = {
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
  };
  const { values, handleChange, handleReset } = useForm(defaultValues);
  return (
    <ModalWithForm
      buttonTextOne="Sign Up"
      buttonTextTwo="or Log in"
      title="Sign Up"
      modalType="register"
      formType="register-form"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
    >
      <label htmlFor="reg-email-input" className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className="modal__input"
          id="reg-email-input"
          placeholder="Email"
          required
          //   value={email}
          onChange={handleChange}
        />
      </label>
      <span className="modal__error" id="reg-email-input-error"></span>
      <label htmlFor="reg-password-input" className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          className="modal__input"
          id="reg-password-input"
          placeholder="Passward"
          required
          //   value={email}
          onChange={handleChange}
        />
      </label>
      <span className="modal__error" id="reg-password-input-error"></span>
      <label htmlFor="reg-name-input" className="modal__label">
        Name*
        <input
          type="text"
          name="name"
          className="modal__input"
          id="reg-name-input"
          placeholder="Name"
          required
          //   value={values.name}
          onChange={handleChange}
        />
      </label>
      <span className="modal__error" id="reg-name-input-error"></span>
      <label htmlFor="avatar-input" className="modal__label">
        Avatar URL*
        <input
          type="url"
          name="avatarUrl"
          className="modal__input"
          id="avatar-input"
          placeholder="Avatar URL"
          required
          //   value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <span className="modal__error" id="reg-avatar-input-error"></span>
    </ModalWithForm>
  );
}

export default RegisterModal;
