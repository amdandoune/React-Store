import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
//import Bar from './Bar.jsx';
import AddProduct from './components/AddProduct';
import BuyProduct from './components/BuyProduct';
import EditProduct from './components/EditProduct';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import TimeNow from './components/clock/TimeNow';
import StopWatch from './components/clock/StopWatch';
import Time from './components/clock/Time';
import Calculator from './components/TemperatureConverter';
import FilterableProductTable from './components/FilterableProductTable';
import AllProductTable from './components/products/Product';

class App extends Component {
  render() {

    let mainComponent = "";
    switch(this.props.location) {
      case "":
        mainComponent = <Home {...this.props}/>;
        break;
      case "home":
        mainComponent = <Home {...this.props}/>;
        break;
      case "addProduct":
        mainComponent = <AddProduct {...this.props}/>;
        break;
      case "buyProduct":
        mainComponent = <BuyProduct {...this.props}/>;
        break;
      case "editProduct":
        mainComponent = <EditProduct {...this.props}/>;
        break;
      case "sideBar":
        mainComponent = <SideBar />;
        break;
      case "stopWatch":
        mainComponent = <StopWatch />;
        break;
      case "temp":
        mainComponent = <Calculator />;
        break;
      case "filterableTable":
        mainComponent = <FilterableProductTable />;
        break;
      case "allProd":
        mainComponent = <AllProductTable />;
        break;
      default:
      mainComponent = <NotFound />;
    }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Store</h1>
          
        </header>
        <NavBar />
        <TimeNow />
        <Time />
        {mainComponent}

      </div>
    );
  }
}

export default App;
