import React from 'react';
import { Link } from 'react-router-dom';
import useDictionaryForm from '../hooks/useDictionaryForm';

const EditDictionary = (props) => {
  const { dictionaryId } = props.match.params;
  const dictionaries = JSON.parse(localStorage.getItem('dictionaries'));
  const item = dictionaries.filter(item => item.id == dictionaryId);
  const data = {
    id: dictionaryId,
    name: item[0]['name']
  };

  const {
    values,
    error,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = useDictionaryForm(data, dictionaryId);

  return (
    <div className="container">
      <h1 className="page-heading">Edit {data.name}</h1>
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
        <Link
          to={`/dictionary/${dictionaryId}`}
          className="btn btn-secondary"
        >
          Cancel
        </Link>
      </form>
    </div>
  )
}

export default EditDictionary;
