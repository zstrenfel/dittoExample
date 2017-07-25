import fetch from 'isomorphic-fetch';
import { 
	REQUEST_PURCHASE_PRODUCT, 
	HANDLE_PURCHASE_FAILURE, 
	HANDLE_PURCHASE_SUCCESS 
} from '../../constants/ActionTypes';

//actions 
export function requestBuyProduct() {
	return {
		type: REQUEST_PURCHASE_PRODUCT,
		payload: {
			isFetching: true
		}
	}
}

export function handlePurchaseSuccess(response) {
	return {
		type: HANDLE_PURCHASE_SUCCESS,
		payload: {
			createdAt: Date(),
			isFetching: false,
			status: 'success',
			response: response
		}
	}
}

export function handlePurchaseFailure(response) {
	return {
		type: HANDLE_PURCHASE_FAILURE,
		payload: {
			createdAt: Date(),
			isFetching: false,
			status: 'error',
			response: response
		}
	}
}

//uses thunk middleware to dispatch multiple actions. 
export function purchaseProduct(product) {
	return dispatch => {
		dispatch(requestBuyProduct());
		console.log('attempting to fetch');
		return fetch('/buy',{method: 'PUT', body: JSON.stringify(product)})
			.then(
				response => {
					var json = response.json();
					if (response.ok) {
						dispatch(handlePurchaseSuccess(json))
					} else {
						dispatch(handlePurchaseFailure(json))
					}
				},
				error => dispatch(handlePurchaseFailure(error))
			)
	}
}

//reducer
const reducer = (state = {}, action) => {
	var payload;
	var isFetching;
	var createdAt;
	var status;
	var response;
	switch (action.type) {
		case REQUEST_PURCHASE_PRODUCT:
			({ payload } = action);
			({ isFetching } = payload);
			console.log('fetching', isFetching);
			return {
				isFetching,
				...state
			}
		case HANDLE_PURCHASE_SUCCESS:
			({ payload } = action);
			return { ...payload }
		case HANDLE_PURCHASE_FAILURE:
			({ payload } = action)
			return { ...payload }
		default: 
			return state;
	}
}

export default reducer;