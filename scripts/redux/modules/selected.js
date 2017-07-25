import { SELECT_PRODUCT } from '../../constants/ActionTypes';

//actions
export function selectProduct(productId) {
	return {
		type: SELECT_PRODUCT,
		payload: {
			productId
		}
	}
}

//reducers
const reducer = (state="", action) => {
	switch (action.type) {
		case SELECT_PRODUCT: 
			const { payload } = action; 
			const { productId } = payload; 
			return productId;
		default: 
			return state;
	}
}

export default reducer