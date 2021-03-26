/* eslint-disable */
import React, { useState } from 'react';
import { scroller } from 'react-scroll';

import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

import logo from '../../assets/images/header/logoheader.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [topbar, setTopbar] = useState(false)

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/
    const changeBackground = () => {
        if(window.scrollY >= 10){
            setTopbar(true);
        } else{
            setTopbar(false);
        }
    };
    // const transitionDuration = {
    //     enter: theme.transitions.duration.enteringScreen,
    //     exit: theme.transitions.duration.leavingScreen,
    //   };
    window.addEventListener('scroll', changeBackground);
    return (
        <div className={topbar ? 'topbar active' : 'topbar'} id="top">
            <div className="header6">
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
                        <NavbarBrand href="/"><img src={logo} alt="wrapkit" /></NavbarBrand>
                        {/**
                         Iconos de Redes sociales -> Header Responsive 
                         */}
                        <Nav navbar className="ml-auto nav-scoial-responsive">
                            <NavItem>
                                <Link className="nav-link navSocialResponsive" to={"/"}>
                                    <div className="round-social light">
                                        
                                        <i className="fa fa-facebook icono-face"></i>
                                    </div>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link navSocialResponsiveIg" to={"/"}>
                                    <div className="round-social light">
                                        <i className="fa fa-instagram icono-ig"></i>
                                    </div>
                                </Link>
                            </NavItem>
                        </Nav>
                        <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <Link className="nav-link" to={"/"} id="posinicio">
                               
                                        <div onClick={() => {
                                                    scroller.scrollTo('posinicio', {
                                                        duration: 1000,
                                                        delay: 50,
                                                        smooth: true, // linear “easeInQuint” “easeOutCubic”
                                                        offset: 10,
                                                    });
                                                }}>
                                                    INICIO
                                                </div>
										</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/"} >
                                    <div onClick={() => {
                                                    scroller.scrollTo('posproyectos', {
                                                        duration: 1000,
                                                        delay: 50,
                                                        smooth: true, // linear “easeInQuint” “easeOutCubic”
                                                        offset: 10,
                                                    });
                                                }}>
                                                    PROYECTOS
                                                </div>
                                    	</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/nosotros"}>
                                        NOSOTROS
                                    	</Link>
                                </NavItem>
                                <NavItem>
                           
                                        <a className="nav-link" href="https://wa.link/5wt7cp" target="_blank" rel="noopener noreferrer">
                                        CONTACTO
                                        </a>
                                        
                                </NavItem>
                                {/* <NavItem>
                                    <Link className="nav-link" to={"/"}>
                                        INCENTIVOS PARA EL EMPLEO
                                    	</Link>
                                </NavItem> */}
                                <NavItem className="navHiddenSocialResponsiveFb">
                                    <Link className="nav-link" to={"https://www.facebook.com/pedronassiff"} target="_blank" rel="noopener noreferrer">
                                        <div className="round-social light">
                                            <i className="fa fa-facebook icono-face"></i>
                                        </div>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link navHiddenSocialResponsiveIg" to={"https://www.instagram.com/pedronassiff/"} target="_blank" rel="noopener noreferrer">
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
