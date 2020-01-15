import React from 'react';
import useForm from '../hooks/useForm';
import validateInput from '../helpers/validateInput';

const INITIAL_STATE = {
  domain: '',
  range: ''
}

const AddDictionaryItem = () => {
  const {
    alert,
    values,
    errors,
    isSubmitting,
    handleBlur,
    handleChange,    
    handleSubmit
  } = useForm(INITIAL_STATE, validateInput);

  return (
    <>
      <h2 className="text-center">Add new dictionary item</h2>
      { alert && <div className="alert alert-success">{alert}</div> }
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
      </form>
    </>
  );
}

export default AddDictionaryItem;
