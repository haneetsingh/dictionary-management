import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import validateInput from '../helpers/validateInput';

const EditDictionaryItem = (props) => {
  const { id } = props.match.params;
  const items = JSON.parse(localStorage.getItem('dictionary'));
  const data = {
    domain: items[id]['domain'],
    range: items[id]['range'],
    problems: items[id]['problems']
  }

  const {
    alert,
    values,
    errors,
    isSubmitting,
    handleBlur,
    handleChange,    
    handleSubmit
  } = useForm(data, validateInput, id);

  return (
    <>
      <h1>Edit Item {id}</h1>
      { alert && <div className="alert alert-success">{alert}</div> }
      <form id="edit-item" onSubmit={handleSubmit}>
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
          Update
        </button>
        <Link to="/all" className="btn btn-secondary">Cancel</Link>
      </form>
    </>
  )
}

export default EditDictionaryItem;
