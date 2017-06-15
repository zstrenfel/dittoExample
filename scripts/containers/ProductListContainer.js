import { connect } from 'react-redux';
import { selectProduct } from '../redux/modules/selected';
import ProductList from '../components/ProductList';


const mapStateToProps = (state) => {
	const { category, products: allProducts, selected } = state;
	const products = category in allProducts ? allProducts[category] : [];
	return {
		products,
		selected
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectProduct: (productId) => dispatch(selectProduct(productId))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList)