import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import useItems from '../hooks/useItems';
import validateInput from '../helpers/validateInput';

const EditDictionaryItem = (props) => {
  const { itemId } = props.match.params;
  const items = JSON.parse(localStorage.getItem('dictionaryItems'));
  const item = items.filter(item => item.id == itemId);
  const data = {
    domain: item[0]['domain'],
    range: item[0]['range'],
    dictionary: item[0]['dictionary'],
    problems: item[0]['problems']
  }

  const {
    values,
    errors,
    isSubmitting,
    handleBlur,
    handleChange,    
    handleSubmit
  } = useForm(data, validateInput, itemId);

  return (
    <div className="container">
      <h1 className="page-heading">Edit item</h1>
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
        <Link to={`/dictionary/${data.dictionary}`}>Cancel</Link>
      </form>
    </div>
  );
}

export default EditDictionaryItem;
