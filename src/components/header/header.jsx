/* eslint-disable */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

import logo from '../../assets/images/logos/logo1.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <div className="topbar" id="top">
            <div className="header6">
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
                        <NavbarBrand href="/"><img src={logo} alt="wrapkit" /></NavbarBrand>
                        <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <Link className="nav-link" to={"/"}>
                                        INICIO
										</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/"}>
                                        CONTACTO
                                    	</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/"}>
                                        INCENTIVOS PARA EL EMPLEO
                                    	</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/"}>
                                        <div className="round-social light">
                                            <i className="fa fa-facebook icono-face"></i>
                                        </div>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/"}>
                                        <div className="round-social light">
                                            <i className="fa fa-instagram icono-ig"></i>
                                        </div>
                                    </Link>
                                </NavItem>
                            </Nav>
                             {/*
                            <div className="act-buttons">
                                <Link to="/" className="nav-link" color="#ffffff">Incentivos para el Empleo</Link>
                                boton copete <Link to="/#coming" className="btn btn-success-gradiant font-14">Incentivos para el Empleo</Link>
                            </div>*/}
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );

}
export default Header;
