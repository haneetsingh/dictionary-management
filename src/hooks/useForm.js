import { useState, useEffect } from 'react';

const useForm = (initialState, validate, updateId = null) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setSubmitting] = useState(false);
	const [alert, setAlert] = useState("");

	useEffect(() => {
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length === 0;
			const dictionaryData = JSON.parse(localStorage.getItem('dictionary')) || [];

			if (noErrors) {
				if (!updateId) {
					dictionaryData.push(values);
					setValues(initialState);
					setAlert("Dictionary item added succesfully");
				}
				else {
					dictionaryData[updateId]['domain'] = values.domain;
					dictionaryData[updateId]['range'] = values.range;
					setAlert("Dictionary item updated succesfully");
				}
				localStorage.setItem('dictionary', JSON.stringify(dictionaryData));
				setSubmitting(false);
			}
			else {
				setSubmitting(false);
			}
		}
	}, [errors]);

	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	}

	const handleBlur = () => {
		const validationErrors = validate(values);
		setErrors(validationErrors);
	}

	const handleSubmit = event => {
		event.preventDefault();
		const validationErrors = validate(values);
		setErrors(validationErrors);
		setSubmitting(true);
	}

	return {
		alert,
		values,
		errors,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit
	};
}

export default useForm;
