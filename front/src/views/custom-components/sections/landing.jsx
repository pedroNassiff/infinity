import React, { useState } from 'react';
import { scroller } from 'react-scroll';


import banner from '../../../assets/images/pcont/backSCont.svg';
import Footer2 from '../../../components/footer/footer2';
import Redirecciones from "../sections/redirecciones";

import { Link } from "react-router-dom";

import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, Row, Col, Form,  Card, CardBody } from 'reactstrap';

import Proyectos from '../proyectos';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import ProyectosComponent from './proyectosComponent';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
const useStyles = makeStyles((theme) => ({

  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function LandingComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const handleChangeIndex = (index) => {
        setValue(index);
      };
      const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
      };
      const fabs = [
        {
          color: 'primary',
          className: classes.fab,
          icon: <AddIcon />,
          label: 'Add',
        },
        {
          color: 'secondary',
          className: classes.fab,
          icon: <EditIcon />,
          label: 'Edit',
        },
        {
          color: 'inherit',
          className: clsx(classes.fab, classes.fabGreen),
          icon: <UpIcon />,
          label: 'Expand',
        },
      ];

    return (
   
        <section className="seccionServicios">
            <Row  className="justify-content-center">
                <Col lg="5" md="7" className="align-self-center">
                    <h1 className="title-1 tituloHeader text-center">SELECCIONA TU MUNDO</h1>
                </Col>     
            </Row>
              <Row className="justify-content-center">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
                        {/**
                         Iconos de Redes sociales -> Header Responsive 
                         */}
                       
                        <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 " id="h6-info">
                          
                           <Nav navbar className="text-center">
                                    <NavItem>
                                        <Link className="nav-link" smooth={true}  to="/#posLinea">
                                            <div onClick={() => {
                                                    scroller.scrollTo('posLinea', {
                                                        duration: 1000,
                                                        delay: 50,
                                                        smooth: true, // linear “easeInQuint” “easeOutCubic”
                                                        offset: 10,
                                                    });
                                                }}>
                                                    LandingPage
                                                </div>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link" to="/#posApi">
                                            <div onClick={() => {
                                                    scroller.scrollTo('posApi', {
                                                        duration: 1000,
                                                        delay: 50,
                                                        smooth: true, // linear “easeInQuint” “easeOutCubic”
                                                        offset: -10,
                                                    });
                                                }}>
                                                Web Api
                                                </div>
                                        </Link>
                                    </NavItem> 
                                    <NavItem>
                                        <Link className="nav-link" to="/#posEco">
                                            <div onClick={() => {
                                                    scroller.scrollTo('posEco', {
                                                        duration: 1000,
                                                        delay: 50,
                                                        smooth: true, // linear “easeInQuint” “easeOutCubic”
                                                        offset: -10,
                                                    });
                                                }}>
                                                eCommerce
                                                </div>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link" to="/#posElearning">
                                            <div onClick={() => {
                                                    scroller.scrollTo('posElearning', {
                                                        duration: 1000,
                                                        delay: 50,
                                                        smooth: true, // linear “easeInQuint” “easeOutCubic”
                                                        offset: -10,
                                                    });
                                                }}>
                                                E-learning
                                                </div>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link" to="/#posAlojamiento">
                                            <div onClick={() => {
                                                    scroller.scrollTo('posAlojamiento', {
                                                        duration: 1000,
                                                        delay: 50,
                                                        smooth: true, // linear “easeInQuint” “easeOutCubic”
                                                        offset: -10,
                                                    });
                                                }}>
                                                Alojamiento
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
                        <div  name="posLinea"> </div>
                    </Navbar>
                    </Row>
                <div id="banner1" className="banner spacer" > 
                            <Row>
                                <Col lg="5" md="7" className="align-self-center colTarjetaService">
                                    <Row className="justify-content-center">
                                    <div className="tituloeLanding">
                                     <h2 className="title font-bold">Landing Page</h2>
                                    </div>
                                    </Row>
                                
                             
                                    {/* <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p> */}
                                    {/* <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form> */}
                                     <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnService" data-toggle="collapse" href="https://wa.link/5wt7cp" target="_blank" rel="noopener noreferrer"><span>MÁS INFO <i className="ti-arrow-right"></i></span></a>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ml-auto colDescService">
                                    {/* <img src={banner} alt="We are Digital Agency" className="img-fluid" /> */}
                                    <Card className="cardService cardServiceEcom">
                                        <CardBody className="cardServiciosPadding">
                                            <h5 className="font-medium">Transformación Digital</h5>
                                            <p className="m-t-20">Integrarse al universo digital con un sitio web adaptado a la necesidad de cada cliente. Diseñamos una solución con las tecnologías más demandadas del mercado.</p>
                                            <Row>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Frontend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Backend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Alojamiento<i className="ti-arrow-right"></i></a>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                     
                             </Row>
                             <div  name="posApi"> </div>

                        </div> 
              
                   
                         <div id="banner1" className="banner spacer">
                            <Row>
                                <Col lg="5" md="7" className="align-self-center colTarjetaService">
                                    <div className="tituloeApi">
                                     <h2 className="title font-bold">Web Api</h2>
                                    </div>
                                  
                                    {/* <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p> */}
                                    {/* <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form> */}
                                     <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnService" data-toggle="collapse" href="https://wa.link/5wt7cp" target="_blank" rel="noopener noreferrer"><span>MÁS INFO <i className="ti-arrow-right"></i></span></a>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ml-auto colDescService">
                                    {/* <img src={banner} alt="We are Digital Agency" className="img-fluid" /> */}
                                    <Card className="cardService cardServiceEcom">
                                        <CardBody className="cardServiciosPadding">
                                            <h5 className="font-medium">Transformación a un nivel superior</h5>
                                            <p className="m-t-20">Ofrecer una experiencia personalizada e innovadora, pensada en potenciar la experiencia del usuario interno y externo a tu universo web. </p>
                                            <Row>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Frontend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Backend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Alojamiento<i className="ti-arrow-right"></i></a>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                             </Row>
                             <div  name="posEco"> </div>
                        </div>
       
                         <div id="banner1" className="banner spacer">
                            <Row>
                                <Col lg="5" md="7" className="align-self-center colTarjetaService">
                                    <div className="tituloeCommerce">
                                     <h2 className="title font-bold">eCommerce</h2>
                                    </div>
                                   
                                    {/* <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p> */}
                                    {/* <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form> */}
                                     <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnService" data-toggle="collapse"href="https://wa.link/5wt7cp" target="_blank" rel="noopener noreferrer"><span>MÁS INFO <i className="ti-arrow-right"></i></span></a>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ml-auto colDescService">
                                    {/* <img src={banner} alt="We are Digital Agency" className="img-fluid" /> */}
                                    <Card className="cardService cardServiceEcom">
                                        <CardBody className="cardServiciosPadding">
                                            <h5 className="font-medium">Custome Products</h5>
                                            <p className="m-t-20">Vender un producto es más que un ckeckout. Lograr que el usuario encuentre lo que está buscando en tu universo web es el objetivo principal.</p>
                                            <Row>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Frontend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Backend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Alojamiento<i className="ti-arrow-right"></i></a>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                             </Row>
                             <div  name="posElearning"> </div>
                        </div>
              
                         <div id="banner1" className="banner spacer">
                            <Row>
                                <Col lg="5" md="7" className="align-self-center colTarjetaService">
                                    <div className="tituloelearning">
                                     <h2 className="title font-bold">E-learning</h2>
                                    </div>
                                    {/* <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p> */}
                                    {/* <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form> */}
                                     <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnService" data-toggle="collapse" href="https://wa.link/5wt7cp" target="_blank" rel="noopener noreferrer"><span>MÁS INFO <i className="ti-arrow-right"></i></span></a>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ml-auto colDescService">
                                    {/* <img src={banner} alt="We are Digital Agency" className="img-fluid" /> */}
                                    <Card className="cardService cardServiceEcom">
                                        <CardBody className="cardServiciosPadding">
                                            <h5 className="font-medium">Transformación Educativa</h5>
                                            <p className="m-t-20">Proponer un universo educativo digital, moderno y escalable, optimizando el aprendizaje y la experiencia de los alumnos presentando procesos y contenidos claros.</p>
                                            <Row>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Frontend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Backend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Alojamiento<i className="ti-arrow-right"></i></a>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                             </Row>
                             <div  name="posAlojamiento"> </div>
                        </div>
           
                   
                         <div id="banner1" className="banner spacer">
                            <Row>
                                <Col lg="5" md="7" className="align-self-center colTarjetaService">
                                <div className="tituloeCommerce">
                                     <h2 className="title font-bold">Alojamiento</h2>
                                    </div>
                      
                                    {/* <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p> */}
                                    {/* <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form> */}
                                     <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnService" data-toggle="collapse" href="https://wa.link/5wt7cp" target="_blank" rel="noopener noreferrer"><span>MÁS INFO <i className="ti-arrow-right"></i></span></a>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ml-auto colDescService">
                                    {/* <img src={banner} alt="We are Digital Agency" className="img-fluid" /> */}
                                    <Card className="cardService cardServiceEcom">
                                        <CardBody className="cardServiciosPadding">
                                            <h5 className="font-medium">Usabilidad y Escalabilidad</h5>
                                            <p className="m-t-20">Dos principios fundamentales para que la inversión que realices sea lo más efectiva posible, pagar por las experiencias que podamos compartir a los usuarios en nuestro universo web.</p>
                                            <Row>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Frontend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Backend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Alojamiento<i className="ti-arrow-right"></i></a>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                             </Row>
                  
                        </div>
                    
                        <Row>
                               <Col>
                                <ProyectosComponent />
                               </Col>
                           </Row>
                                <Footer2/>
            </section>
    
                    
                               
                   
                   
      
    );
}

