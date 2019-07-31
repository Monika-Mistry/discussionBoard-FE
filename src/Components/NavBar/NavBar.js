import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignInAlt,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { NavLink as RRNavLink, BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { ItemPage } from '../ItemPage/ItemPage';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { LoginForm } from '../LoginForm/LoginForm';

export class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    render() {
        return (
            <Router>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={RRNavLink} exact to="/">Discussion Board</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/register"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Register</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/login"><FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon> Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <br></br>

                <Route exact path="/" component={ItemPage} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/login" component={LoginForm} />

            </Router>
        )
    }
}