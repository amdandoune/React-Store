import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
      //collapsed: true
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
      // collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">React Store</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/null/">NotFound</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sideBar/">Side Bar</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Product Opt
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/addProduct/">
                    Add Product
                  </DropdownItem>
                  <DropdownItem href="/editProduct/">
                    Edit Product
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/buyProduct/">
                    Buy Product
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        

        <Navbar color="primary" light expand="md">
          <NavbarBrand href="/">React Store</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/null/">NotFound</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sideBar/">Side Bar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/stopWatch/">Stop Watch</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/temp/">Temperature Converter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/filterableTable/">Filterable Table</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/allProd/">All Products Table</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Product Opt
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/addProduct/">
                    Add Product
                  </DropdownItem>
                  <DropdownItem href="/editProduct/">
                    Edit Product
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/buyProduct/">
                    Buy Product
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}