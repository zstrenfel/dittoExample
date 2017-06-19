import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="Header">
			<Link to="/">
				<h2>DITTO</h2>
			</Link>
		</div>
	)
}

export default Header;