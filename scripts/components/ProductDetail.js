import React, { Component } from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash';
import DOMPurify from 'dompurify';
import SizeFormContainer from '../containers/SizeFormContainer';
import ProductListContainer from '../containers/ProductListContainer'

const propTypes = {
	brand: PropTypes.string.isRequired, 
	description: PropTypes.string.isRequired,
	images: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
}

class ProductDetail extends Component {
	render() {
		const { brand, description, images, name, price, id } = this.props;
		return (
			<div className="ProductDetail">
				<div className="gallery">
					<img src={`../..${images.frontal}`} alt={`${name}-front-view`} className="img-front"/>
					<img src={`../..${images.side}`} alt={`${name}-side-view`} className="img-side"/>
				</div>
				
				<h1>{_.startCase(brand)}</h1>
				<span className="product-name">{name}</span>
				<span className="product-price">{`$${price}`}</span>
				<div className="product-detail-body">
					<div 
						className="product-description" 
						dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}}
					/>
					<div className="select-size">
						<SizeFormContainer productId={id} />
					</div>
				</div>
				<div className="footer">
					<h3>Select Your Eyewear</h3>
					<ProductListContainer selected={id} />
				</div>
			</div>
		)
	}
}

ProductDetail.propTypes = propTypes;

export default ProductDetail;