import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SizeFormInput from './SizeFormInput';


const propTypes = {
	'price': PropTypes.string.isRequired,
	'sku-id': PropTypes.string.isRequired,
	'sizes': PropTypes.array.isRequired
}


class SizeForm extends Component {
	constructor(props) {
		super(props);
		this.handleSelectSize = this.handleSelectSize.bind(this);
		this.state = {
			'sku-size': null
		}
	}
	handleSelectSize(e) {
		console.log('selecteing', e.target.value);
	}
	renderOptions() {
		const { sizes } = this.props;
		return sizes.map(s => {
			return <SizeFormInput key={s} label={s} value={s} name="sku-size" onChange={this.handleSelectSize} />
		})
	}
	render() {
		return (
			<form action="" className="SizeForm">
				<h3>Select Size</h3>
				{this.renderOptions()}
				<button className="buy-now">BUY NOW</button>
			</form>
		)
	}
}

SizeForm.propTypes = propTypes;

export default SizeForm;