import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ProductTable from './ProductTable';
import ProductDetailContainer from '../containers/ProductDetailContainer';


function Main({}) {
	return (
		<main>
			<Switch>
				<Route exact path='/' component={ProductTable}/>
				<Route path='/product/:productId' component={ProductDetailContainer} />
			</Switch>
		</main>
	)
}

export default Main;