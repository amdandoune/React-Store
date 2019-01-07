import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';

export default class ToolBar extends Component {
	render() {
		return (
			<div>
				<br/>
				<a href="/">Home</a>
				&nbsp;&nbsp;&nbsp;
		        <a href="/xyz">NotFound</a>
		        &nbsp;&nbsp;&nbsp;
		        <a href="/addProduct">Add Product</a>
		        &nbsp;&nbsp;&nbsp;
		        <a href="/buyProduct">Buy Product</a>
	        	&nbsp;&nbsp;&nbsp;
		        <a href="/editProduct">Edit Product</a>
		       	&nbsp;&nbsp;&nbsp;
		        <a href="/sideBar">Side Bar</a>
		       	<hr/>
	        </div>
		);
	}
}