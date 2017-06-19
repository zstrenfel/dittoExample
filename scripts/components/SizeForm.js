import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import SizeFormInput from './SizeFormInput';

const propTypes = {
	price: PropTypes.string.isRequired,
	purchaseProduct: PropTypes.func.isRequired,
	skuId: PropTypes.string.isRequired,
	sizes: PropTypes.array.isRequired
}

class SizeForm extends Component {
	constructor(props) {
		super(props);
		this.handlePurchaseProduct = this.handlePurchaseProduct.bind(this)
		this.handleSelectSize = this.handleSelectSize.bind(this);
		this.state = {
			'skuSize': null
		}
	}
	handlePurchaseProduct(e) {
		e.preventDefault();
		const { skuSize } = this.state
		const { price, purchaseProduct, skuId } = this.props;
		const productInfo = {
			'product-price': price,
			'product-sku-size': skuSize,
			'product-sku-id': skuId,
			'purchase-datatime': new Date().toISOString()
		}
		purchaseProduct(productInfo);
	}
	handleSelectSize(e) {
		this.setState({ skuSize: e.target.value })
	}
	renderOptions() {
		const { sizes } = this.props;
		return sizes.map(s => {
			return <SizeFormInput 
				key={s} 
				label={s} 
				value={s} 
				name="sku-size" 
				onChange={this.handleSelectSize} 
			/>
		})
	}
	render() {
		const { skuSize } = this.state;
		const buttonClasses = classNames('buy-now', {disabled: _.isEmpty(skuSize)});
		return (
			<form onSubmit={this.handlePurchaseProduct} className="SizeForm">
				<h3>Select Size</h3>
				{ this.renderOptions() }
				<button className="buy-now">BUY NOW</button>
			</form>
		)
	}
}

SizeForm.propTypes = propTypes;

export default SizeForm;