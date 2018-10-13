import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom"
import{
    Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }
    toggle = () => {
        this.setState({
            isOpen:!this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" ligth expand="md">
                    <NavbarBrand href="/home/">H-Hmmom</NavbarBrand>
                    <NavBarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <NavItem>
                                <Link to="/home/"> Home </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/calendar/"> This Years Calendar </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/allmovies/"> All Movies </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about/"> About </Link>
                            </NavItem>
                        </Collapse>
                </Navbar>
            </div>
        )
    }
}