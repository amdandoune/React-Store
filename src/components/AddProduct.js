import React, {Component} from 'react';

export default class AddProduct extends Component {
	render() {
		return (
			<div>
				<hr/>
		        Add Product! 
		        <hr/>
				<form method="post" action="/admin/products/add-product" >
				    
				    <div class="form-group">
				        <label for="">Product name: </label>
				        &nbsp;
				        <input type="text"  name="title" placeholder="Title"></input>
				    </div>
				    <div class="form-group">
				        <label for="">Description: </label>
				        <textarea name="desc" class="form-control" cols="10" rows="4"  placeholder="Description" > </textarea>
				    </div>
				    <div class="form-group">
				        <label for="">Category: </label>
				        &nbsp;
				        <select name="category" >
				            <option value="opt1">Opt1</option>
				            <option value="opt2">Opt2</option>
				        </select>
				    </div>
				    <div class="form-group">
				        <label for="">Price: </label>
				        &nbsp;
				        <input type="text" name="price" value="" placeholder="Price"></input>
				    </div>
				    <div class="form-group">
				        <label for="">Amount: </label>
				        &nbsp;
				        <input type="text" name="amount" value="" placeholder="Amount"></input>
				    </div>
				    <button class="btn btn-default">Submit</button>

				</form>


	        </div>
		);
	}
}