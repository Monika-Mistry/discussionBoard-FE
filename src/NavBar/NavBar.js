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
} from '@fortawesome/free-solid-svg-icons'


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
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="">Discussion Board</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href=""><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Register</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href=""><FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon> Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}