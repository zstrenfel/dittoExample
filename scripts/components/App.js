import React from 'react'
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import '../../styles/main.scss';
import 'normalize.css';

import Home from './Home';
import ProductDetail from './ProductDetail';
const history = createHistory();
function App(){
	return (
		<Router history={history}>
			<Route path="/" component={Home} >
				<Route path="/:id" component={ProductDetail}/>
			</Route>
		</Router>
	)
}

export default App