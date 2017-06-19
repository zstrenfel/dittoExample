require('es6-promise/auto');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import configureStore from './redux/configureStore';
import App from './components/App';
import createHistory from 'history/createBrowserHistory'
import 'normalize.css';
import '../styles/main.scss';

import initialStore from './constants/initialStore';

const history = createHistory();
const store = configureStore(initialStore);

console.log("store state", store.getState())
const render = (Component) => {
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter >
				<Component />
			</BrowserRouter>
		</Provider>,
		document.getElementById('react-root')
	)		
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
