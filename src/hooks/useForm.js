// custom hook for Dictionary entries form validations
import { useState, useEffect } from 'react';
import { history } from '../helpers/history';
import useItems from './useItems';

const useForm = (initialState, validate, updateId = null) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setSubmitting] = useState(false);
	const { items, addItem, updateItems } = useItems(values.dictionary);

	useEffect(() => {
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length === 0;

			if (noErrors) {
				if (!updateId) {
					values.id = Date.now();
					addItem(values);
				}
				else {
					const updatedItems = items.map(item => {
						if (item.id == updateId) {
							item['domain'] = values.domain;
							item['range'] = values.range;
						}
						return item;
					});
					updateItems(updatedItems);
				}
				setSubmitting(false);
				history.push(`/dictionary/${values.dictionary}`);
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
		values,
		errors,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit
	};
}

export default useForm;
