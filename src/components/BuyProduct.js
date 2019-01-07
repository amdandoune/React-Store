import React, {Component} from 'react';

export default class BuyProduct extends Component {
	render() {
		return (
			<div>
		        Buy Product
		        <hr/>

				<table class="table table-striped">
				    <thead>
				        <tr> 
				            <th>Product</th> 
				            <th>Price</th> 
				            <th>Category</th> 
				            <th>Amount Available</th> 
				            <th>Amount wanted</th> 
				            <th>Add</th>
				        </tr>
				    </thead>
				    <tbody>

				        <tr>
				            <td>test</td>
				            <td>$00</td>
				            <td>opt1</td>
				            <td>20</td>

				            <td><input placeholder="0" type="number" step="1" min="0" max="20" /></td>
				            <td><a href="/">Add</a></td>
				        </tr>

				    </tbody>
				</table>
				
				<p>Total price is : </p>
				<button>Add to cart</button>

	        </div>
		);
	}
}