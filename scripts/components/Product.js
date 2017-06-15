import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

const propTypes = {
	brand: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	images: PropTypes.object.isRequired
}

function Product({ brand, name, id, images }) {
	const classes = classNames('Product', `product-${id}`);
	const imgPath = `../..${images.frontal}`
	return (
		<div className={classes}>
			<img src={imgPath} alt={name}/>
			<span className="product-brand">{_.startCase(brand)}</span>
			<span className="product-name">{_.startCase(name)}</span>
		</div>
	)
}

Product.propTypes = propTypes;

export default Product;
