import { connect } from 'react-redux';
import ProductDetail from '../components/ProductDetail';
import { getProduct } from '../utils/ProductUtils';

const mapStateToProps = (state, ownProps) => {
	const { category, products } = state;
	const { productId } = ownProps.match.params;
	const product = getProduct(productId, category, products);
	return {
		...product
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductDetail)