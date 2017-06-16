import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
}

function SizeFormInput({ label, value, name, onChange }) {
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

export default SizeFormInput;