import { SELECT_PRODUCT, BUY_PRODUCT } from '../../constants/ActionTypes';

//actions
export function selectProduct(productId) {
	return {
		type: SELECT_PRODUCT,
		payload: {
			productId
		}
	}
}

export function buyProduct(productId) {
	//todo
}

//reducers
const reducer = (state="", action) => {
	switch (action.type) {
		case SELECT_PRODUCT: 
			const { payload } = action; 
			const { productId } = payload; 
			return payload;
		default: 
			return state;
	}
}

// const reducer = (state={}, action) => {
// }
export default reducer