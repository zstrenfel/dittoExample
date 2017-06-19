import { connect } from 'react-redux';
import { purchaseProduct } from '../redux/modules/purchase';
import SizeForm from '../components/SizeForm';
import { getProduct } from '../utils/ProductUtils';

const mapStateToProps = (state, ownProps) => {
	const { category, products } = state;
	const { productId } = ownProps;
	const product = getProduct(productId, category, products)
	const { price, 'sku-id': skuId, sizes } = product;
	return {
		price, 
		skuId,
		sizes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		purchaseProduct: (product) => dispatch(purchaseProduct(product))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SizeForm)