import React from 'react';
import { Button, Navbar, Collapse, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink as Bslink,
Container, Row, Col} from 'reactstrap';
import {NavLink} from "react-router-dom";
import './sidebar.css';

export default class Homesidebar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: true
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div >
                <Navbar className="sidebar" color="dark" dark expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar vertical>
                            <NavItem className="sideitem">
                                <Bslink tag={NavLink} to='/sub/economics'>G.S. Economics</Bslink>
                            </NavItem >
                            <NavItem className="sideitem">
                                <Bslink tag={NavLink} to="/sub/ctet">CTET, OTHER TET</Bslink>
                            </NavItem>
                            <NavItem className="sideitem">
                                <Bslink tag={NavLink} to="/">G.S. Polity</Bslink>
                            </NavItem>
                            <NavItem className="sideitem">
                                <Bslink tag={NavLink} to="/">G.S. ENVIRONMENT</Bslink>
                            </NavItem>
                            <NavItem className="sideitem">
                                <Bslink tag={NavLink} to="/">G.S. GEOGRAPHY</Bslink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}