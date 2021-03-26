/* eslint-disable */
import React from 'react';
import { Link } from "react-router-dom";
import { scroller } from 'react-scroll';

import { Row, Col, Container, Card } from 'reactstrap';

import img1 from '../../../assets/images/proyectos/misia.PNG';
import img2 from '../../../assets/images/proyectos/empleo.PNG';
import img3 from '../../../assets/images/blog/blog-home/img1.jpg';

const ProyectosComponent = () => {
    return (
        <div>
            {/* <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">PROYECTOS</h1>
                        <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6> 
                        </Col>
                    </Row>
                </Container>
            </div> */}
            <div className="blog-home2 spacer"  id="posproyectos">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8" className="text-center">
                            <h2 className="title-1 tituloHeader text-center">PROYECTOS</h2>
                            {/* <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6> */}
                        </Col>
                    </Row>
                    <Row className="m-t-40 justify-content-center">
                        <Col lg="6" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img1} alt="wrappixel kit" /></a>
                                {/* <div className="date-pos bg-info-gradiant">Oct<span>23</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">You should have eagle’s eye on new trends and techonogies</a></h5>
                                <p className="m-t-20">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>
                                <a href="#" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a> */}
                            </Card>
                        </Col>
                        <Col lg="6" md="6">
                            <Card className="cardTextAdjust">
                                {/* <a href="#"><img className="card-img-top" src={img2} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">Oct<span>23</span></div> */}
                                <h5 className="font-medium m-t-30 tituloProyectos1"><a href="#" className="link">MISIA</a></h5>
                                <p className="m-t-20 subtituloProyectos">El proyecto de eCommerce se desarrollò con un enfoque Custome Products para que los usuarios puedan alcanzar un mayor grado de personalizaciòn al momento de elegir el producto que necesite y estè interesado.

Las tecnologìas que se utilizaron en el proyecto fueron PHP y Laravel para el Backend, JavaScript, HTML5 y CSS3 para el Frontend. Para la geolocalizaciòn se integrò la API de Javascript de Google</p>
                                <a href="https://misia.com.ar/" className="linking text-themecolor m-t-10 btnLinkProyectosLeft"  target="_blank" rel="noopener noreferrer">
                                <div onClick={() => {
                                                    scroller.scrollTo('posproyectospage', {
                                                        duration: 1000,
                                                        delay: 50,
                                                        smooth: true, // linear “easeInQuint” “easeOutCubic”
                                                        offset: 10,
                                                    });
                                                }}>
                                              
                                                </div>
                                    Ir a Misia <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        {/* <Col lg="4" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img3} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">Oct<span>23</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">Learn from small things to create something bigger.</a></h5>
                                <p className="m-t-20">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>
                                <a href="#" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col> */}
                    </Row>
                    {/* <Row className="justify-content-center">
                        <Col md="8" className="text-center">
                            <h2 className="title">PROYECTOS</h2>
                      <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6> 
                        </Col>
                    </Row> */}
                    <Row className="m-t-40 justify-content-center">
                        <Col lg="6" md="6">
                            <Card className="cardTextAdjust">
                                {/* <a href="#"><img className="card-img-top" src={img2} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">Oct<span>23</span></div> */}
                                <h5 className="font-medium m-t-30 tituloProyectos2"><a href="#" className="link">Punto de Empleo <br /> del Gobierno del Chaco</a></h5>
                                <p className="m-t-20 subtituloProyectos2">Web institucional para el Gobierno de la Provincia del Chaco Argentina desarrollada con Reactjs para el frontend, Express para el backend y MySQL como base de datos.</p>
                                <a href="https://empleo.chaco.gob.ar/" className="linking text-themecolor m-t-10 btnLinkProyectosRight"  target="_blank" rel="noopener noreferrer">Ir al punto <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="6" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img2} alt="wrappixel kit" /></a>
                                {/* <div className="date-pos bg-info-gradiant">Oct<span>23</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">You should have eagle’s eye on new trends and techonogies</a></h5>
                                <p className="m-t-20">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>
                                <a href="#" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a> */}
                            </Card>
                        </Col>
                        {/* <Col lg="4" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img3} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">Oct<span>23</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">Learn from small things to create something bigger.</a></h5>
                                <p className="m-t-20">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>
                                <a href="#" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col> */}
                    </Row>
                </Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <Link to="/proyectos">
                        <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnService" data-toggle="collapse"><span>+ PROYECTOS<i className="ti-arrow-right"></i></span></a>
                        </Link>
                    </Col>
                </Row>
                
            </div>
        </div>
    );
}

export default ProyectosComponent;
