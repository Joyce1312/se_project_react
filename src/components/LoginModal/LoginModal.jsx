import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function LoginModal({ activeModal, handleCloseClick }) {
  const defaultValues = {
    email: "",
    password: "",
  };
  const { values, handleChange, handleReset } = useForm(defaultValues);
  return (
    <ModalWithForm
      buttonTextOne="Log in"
      buttonTextTwo="or Sign Up"
      title="Log in"
      modalType="login"
      formType="login-form"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
    >
      <label htmlFor="log-email-input" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          id="log-email-input"
          placeholder="Email"
          required
          //   value={email}
          onChange={handleChange}
        />
      </label>
      <span className="modal__error" id="log-email-input-error"></span>
      <label htmlFor="log-password-input" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          id="log-password-input"
          placeholder="Passward"
          required
          //   value={email}
          onChange={handleChange}
        />
      </label>
      <span className="modal__error" id="log-password-input-error"></span>
    </ModalWithForm>
  );
}

export default LoginModal;
