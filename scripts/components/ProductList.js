import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const propTypes = {
	products: PropTypes.array,
	selected: PropTypes.string
}

const defaultProps = {
	products: [],
	selected: ""
}

class ProductList extends Component {
	renderProducts() {
		const { products, selected } = this.props;
		console.log('selected', selected);
		return products.map(p => {
			return <Product {...p} 
				key={p.id} 
				selected={selected === p.id} 
			/>
		})
	}
	render() {
		return (
			<div className="ProductList">
				{this.renderProducts()}
			</div>
		)
			
	}
}

ProductList.propTypes = propTypes;
ProductList.defaultProps = defaultProps;

export default ProductList;