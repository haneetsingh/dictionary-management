import React from 'react';

const DeleteConfirmation = ({ id, onClose, text, deleteItem, closeSelf }) => {
  const handleDelete = id => {
    deleteItem(id);

    if (closeSelf) {
      onClose();
    }
  }
  
  return (
    <div className="confirm-actions">
      <p>{text}</p>
      <button className="btn btn-primary" onClick={() => handleDelete(id)}>Yes</button>
      <button className="btn btn-secondary" onClick={onClose}>No</button>
    </div>
  );
}

export default DeleteConfirmation;
