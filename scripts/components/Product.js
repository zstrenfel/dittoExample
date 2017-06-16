import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const propTypes = {
	brand: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	images: PropTypes.object.isRequired,
	selected: PropTypes.bool
}

const defaultProps = {
	selected: false
}

function Product({ brand, name, id, images, selected }) {
	const classes = classNames('Product', `product-${id}`, {'selected': selected});
	const imgPath = `../..${images.frontal}`
	return (
		<div className={classes}>
			<Link to={`/product/${id}`}>
				<img src={imgPath} alt={name}/>
				<span className="product-brand">{_.startCase(brand)}</span>
				<span className="product-name">{_.startCase(name)}</span>
			</Link>
		</div>
		
	)
}

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;

export default Product;
