import React from 'react';
import axios from 'axios';
// import data from './products.json';

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.amount>0 ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;
    // const link = {product.amount>0 ? "/" : null};
    const label = product.amount>0 ? <Test product = {product}/> : 'Unavailable';

    return (
      <tr>
      	<td><img src={product.image} alt="" width="128" height="128"></img></td>
        <td>{name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>{product.amount}</td>

        <td><input id="count" placeholder="0" type="number" step="1" min="0" max={product.amount} /></td>
		
		<td> {label} </td>
      </tr>
    );
  }
}

class Test extends React.Component {
	
	handleAdd = e => {
    e.preventDefault();
    var t = document.getElementById('count').value * this.props.product.price; 
    const dataOut = {
      id: this.props.product.id,
      name: this.props.product.name,
      count: document.getElementById('count').value,
      amount: this.props.product.amount-document.getElementById('count').value,
      price: this.props.product.price,
      total: document.getElementById('count').value * this.props.product.price
    };

    axios.post(`https://my-json-server.typicode.com/amdandoune/database/products`, { dataOut })
      .then(res => {
        // console.log(res);
        console.log(res.data);
      })
      alert(t);
  	}

	render () {
		return (
			<div>
				<p>
					<button onClick={this.handleAdd}>ADD</button>
				</p>
			</div>
		);
	}
}


class ProductTable extends React.Component {
  render() {
    const rows = [];

    this.props.products.forEach((product) => {
      
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
    });

    return (
      <table className="table table-striped">
        <thead>
          <tr>
          	<th>Picture</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Amount to buy</th>
            <th>Add to Cart</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class AllProductTable extends React.Component {
	

	state = {
	    products: [],
	    name: '',
	    count: 0,
	    id: '',
	    cart: []
	  }

	  componentDidMount() {
	  	// ../../../products.json
	    axios.get(`https://my-json-server.typicode.com/amdandoune/database/products`)
	      .then(res => {
	        const products = res.data;
	        this.setState({ products });
	      })
	  }

  render() {
    return (
      <div>
      <fieldset>
  		<legend><h4><u>Products' Table:</u></h4></legend>
        
        <ProductTable
          products={this.state.products}
        />
        <br/><br/>
        </fieldset>
      </div>
    );
  }
}



export default AllProductTable;
