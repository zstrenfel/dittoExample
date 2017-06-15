import React, { Component } from 'react';
import ProductListContainer from '../containers/ProductListContainer';

class ProductTable extends Component {
	render() {
		return (
			<div className="ProductTable">
				<div className="title">
					<h1>Select A product</h1>
					<ProductListContainer />
				</div>
			</div>
		)
	}
}

export default ProductTable;