import "./DeleteModal.css";

function DeleteModal({ activeModal, handleCloseClick, handleCardDelete }) {
  //   const handleDeleteClick = () => {
  //     onCardClick(item);
  //   };
  return (
    <div
      className={`modal modal_type_delete ${
        activeModal === "delete-card" && "modal_opened"
      }`}
    >
      <div className="modal__container modal__container_type_delete">
        <button
          onClick={handleCloseClick}
          className="modal__close-btn modal__close-btn_type_delete"
          type="button"
          aria-label="Close Delete Confirmation"
        ></button>
        <p className="modal__title">
          Are you sure you want to delete this item?{" "}
          <span className="modal__subtitle">This action is irreversible.</span>
        </p>
        <button
          onClick={handleCardDelete}
          className="modal__confirm-del-btn"
          type="button"
          aria-label="Confirm delete item"
        >
          Yes, delete item
        </button>
        <button
          onClick={handleCloseClick}
          className="modal__cancel-btn"
          type="button"
          aria-label="Cancel delete button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
