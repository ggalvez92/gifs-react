import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState("");
	const handelInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 2) return;

		setCategories((categories) => [inputValue, ...categories]);
		setInputValue("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="searchBar"
				value={inputValue}
				onChange={handelInputChange}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
