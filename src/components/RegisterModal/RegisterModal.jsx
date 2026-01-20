import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function RegisterModal({ activeModal, handleCloseClick, handleRegistration }) {
  const defaultValues = {
    email: "",
    password: "",
    name: "",
    avatar: "",
  };
  const { values, handleChange } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    //console.log("Form values:", values);
    handleRegistration(values);
  }

  return (
    <ModalWithForm
      buttonTextOne="Sign Up"
      buttonTextTwo="or Log in"
      title="Sign Up"
      modalType="register"
      formType="register-form"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
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
          value={values.email}
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
          placeholder="Password"
          required
          value={values.password}
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
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <span className="modal__error" id="reg-name-input-error"></span>
      <label htmlFor="reg-avatar-input" className="modal__label">
        Avatar URL*
        <input
          type="url"
          name="avatar"
          className="modal__input"
          id="reg-avatar-input"
          placeholder="Avatar"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
      <span className="modal__error" id="reg-avatar-input-error"></span>
    </ModalWithForm>
  );
}

export default RegisterModal;
