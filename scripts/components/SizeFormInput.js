import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
}

function SizeFormInput({ label, name, onChange, value }) {
	return (
		<div className="SizeFormInput">
			<label className="control">
			{label}
			<input type="radio" value={value} name={name} onChange={onChange}/>
			<div className="control-indicator"></div>
			</label>
		</div>
	)
}	

SizeFormInput.propTypes = propTypes;

export default SizeFormInput;