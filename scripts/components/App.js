import React from 'react'
import '../../styles/main.scss';
import 'normalize.css';

import Header from './Header';
import Main from './Main';

function App(){
	return (
		<div className="App">	
			<Header />
			<div id="container">
				<Main />
			</div>
		</div>
	)
}

export default App