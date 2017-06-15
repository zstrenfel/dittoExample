import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import category from './modules/category';
import products from './modules/products';
import selected from './modules/selected';


const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore)

function reducer(state={}, action) {
	return {
		category: category(state.category, action),
		products: products(state.products, action),
		selected: selected(state.selected, action)
	}
}

const configureStore = initialState => createStoreWithMiddleware(reducer, initialState);
export default configureStore;