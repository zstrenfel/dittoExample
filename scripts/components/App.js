import React from 'react'
import '../../styles/main.scss';
import 'normalize.css';

import Header from './Header';
import ProductTable from './ProductTable';

function App(){
	return (
		<div id="container">	
			<Header />
			<ProductTable />
		</div>
	)
}

export default App