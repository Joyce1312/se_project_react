import { useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({ activeModal, handleCloseClick, updateProfile }) {
  const { currentUser } = useContext(CurrentUserContext);
  const defaultValues = {
    name: currentUser?.name || "",
    avatar: currentUser?.avatar || "",
  };
  const { values, handleChange, setValues } = useForm(defaultValues);
  useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    updateProfile(values);
  }
  return (
    <ModalWithForm
      buttonTextOne="Save changes"
      title="Change profile data"
      modalType="edit-profile"
      formType="edit-profile-form"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="edit-name-input" className="modal__label">
        Name*
        <input
          type="text"
          name="name"
          className="modal__input"
          id="edit-name-input"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <span className="modal__error" id="edit-name-input-error"></span>
      <label htmlFor="edit-avatar-input" className="modal__label">
        Avatar URL*
        <input
          type="url"
          name="avatar"
          className="modal__input"
          id="edit-avatar-input"
          placeholder="Avatar"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
      <span className="modal__error" id="edit-avatar-input-error"></span>
    </ModalWithForm>
  );
}

export default EditProfileModal;
