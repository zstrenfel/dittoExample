import { connect } from 'react-redux';
import { buyProduct } from '../redux/modules/selected';
import SizeForm from '../components/SizeForm';
import { getProduct } from '../utils/ProductUtils';


const mapStateToProps = (state, ownProps) => {
	const { category, products } = state;
	const { productId } = ownProps;
	const product = getProduct(productId, category, products)
	const { price, 'sku-id': skuId, sizes } = product;
	return {
		price, 
		'sku-id': skuId,
		sizes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SizeForm)