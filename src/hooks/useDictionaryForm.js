// custom hook for Dictionary form validations
import { useState, useEffect } from 'react';
import { history } from '../helpers/history';
import useDictionaries from './useDictionaries';

const useDictionaryForm = (initialState, updatedId = null) => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);
  const { dictionaries, addDictionary, updateDictionaries } = useDictionaries();

  useEffect(() => {
    if (isSubmitting) {
      if (!error) {
        if (!updatedId) {
          values.id = Date.now();
          addDictionary(values);
          history.push(`/dictionary/${values.id}`);
        }
        else {
          const updatedItems = dictionaries.map(dictionary => {
            if (dictionary.id == updatedId) {
              dictionary['name'] = values.name;
            }
            return dictionary;
          });
          updateDictionaries(updatedItems);
          history.push(`/dictionary/${updatedId}`);
        }
        setSubmitting(false);
      }
			else {
				setSubmitting(false);
			}
    }

  }, [error, isSubmitting, dictionaries]);

  const validateName = name => {
    let validationError;
    if (!name) {
      validationError = 'Name is required';
    }
    else {
      validationError = '';
    }

    return validationError;
  }

  const handleBlur = () => {
    const errors = validateName(values.name);
    setError(errors);
  }

  const handleChange = event => {
    setValues({
      ...values,
      name: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const errors = validateName(values.name);
    setError(errors);
    setSubmitting(true);
  }

  return {
    values,
    error,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  };
}

export default useDictionaryForm;
