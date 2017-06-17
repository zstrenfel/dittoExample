import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import category from './modules/category';
import products from './modules/products';
import selected from './modules/selected';
import purchase from './modules/purchase';


const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware, thunk)(createStore)

function reducer(state={}, action) {
	return {
		category: category(state.category, action),
		products: products(state.products, action),
		purchase: purchase(state.purchase, action)
	}
}

const configureStore = initialState => createStoreWithMiddleware(reducer, initialState);
export default configureStore;