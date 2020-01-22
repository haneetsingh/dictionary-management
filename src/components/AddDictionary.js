import React from 'react';
import useDictionaryForm from '../hooks/useDictionaryForm';

const initialState = {
  id: null,
  name: ''
}

const AddDictionary = ({ onClose }) => {
  const {
    values,
    error,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = useDictionaryForm(initialState);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="dictionary-name">Name</label>
          <input
            id="dictionary-name"
            type="text"
            name="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={(error.length > 0) ? 'form-item form-item--error' : 'form-item'}
          />
          { (error.length > 0) &&
            <div className="error-text">{error}</div>
          }
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          Add
        </button>
        <button className="btn btn-secondary" onClick={onClose}>Close</button>
      </form>
    </>
  )
}

export default AddDictionary;
