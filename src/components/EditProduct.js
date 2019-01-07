import React, {Component} from 'react';

export default class EditProduct extends Component {
	render() {
		return (
			<div>
		        Edit Product
		        <hr/>

<table class="table table-striped">
    <thead>
        <tr> 
            <th>Product</th> 
            <th>Price</th> 
            <th>Category</th> 
            <th>Amount</th> 
            <th>Edit</th> 
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <td>test</td>
            <td>$00</td>
            <td>opt1</td>
            <td>20</td>

            <td><a href="/">Edit</a></td>
            <td><a class="confirmDeletion" href="/">Delete</a></td>
        </tr>
        
    </tbody>
</table>

	        </div>
		);
	}
}