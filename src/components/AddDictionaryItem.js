import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import validateInput from '../helpers/validateInput';


const AddDictionaryItem = (props) => {
  const { dictionaryId } = props.match.params;
  const initialState = {
    id: null,
    domain: '',
    range: '',
    dictionary: dictionaryId
  }

  const {
    values,
    errors,
    isSubmitting,
    handleBlur,
    handleChange,    
    handleSubmit
  } = useForm(initialState, validateInput);

  return (
    <div className="container">
      <h1 className="page-heading">Add new item</h1>
      <form id="add-item" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="domain">Domain</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            id="domain"
            type="text"
            name="domain"
            autoComplete="off"
            value={values.domain}
            className={errors.domain ? 'form-item form-item--error' : 'form-item'}
          />
          { errors.domain && <div className="error-text">{errors.domain}</div> }
        </div>
        <div className="form-field">
          <label htmlFor="range">Range</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            id="range"
            type="text"
            name="range"
            autoComplete="off"
            value={values.range}
            className={errors.range ? 'form-item form-item--error' : 'form-item'}
          />
          { errors.range && <div className="error-text">{errors.range}</div> }
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          Add
        </button>
        <Link to={`/dictionary/${dictionaryId}`} >Cancel</Link>
      </form>
    </div>
  );
}

export default AddDictionaryItem;
