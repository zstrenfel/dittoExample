import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';
import ProductTable from './ProductTable';
import ProductDetailContainer from '../containers/ProductDetailContainer';


function Main({}) {
	return (
		<main>
			<Route render={({ location, history, match }) => {
				return (
					<RouteTransition 
						pathname={location.pathname}
						atEnter={{ opacity: 0 }}
						atLeave={{ opacity: 0 }}
						atActive={{ opacity: 1 }}
				    >
						<Switch key={location.key} location={location}>
							<Route exact path='/' component={ProductTable}/>
							<Route path='/product/:productId' component={ProductDetailContainer} />
						</Switch>
					</RouteTransition>
				)
			}} />
		</main>
	)
}

export default Main;