import React, { Component } from 'react';
import ProductListContainer from '../containers/ProductListContainer';



function ProductTable({}) {
	return (
		<div className="ProductTable" >
			<div className="title">
				<h1>Select Your Eyewear</h1>
				<ProductListContainer />
			</div>
		</div>
	)
}

export default ProductTable;