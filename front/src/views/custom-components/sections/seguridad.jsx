import React from 'react';
import { Row, Col, Container, Form,  Card, CardBody } from 'reactstrap';

import banner from '../../../assets/images/pcont/backSCont.svg';

const Seguridad = () => {
    return (
        <div>
            {/* <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Form Banner</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            <div className="bg-light">
                <section>
                    <div id="banner1" className="banner spacer">
                        <Container className="PcontainerService">
                            <Row>
                                <Col lg="5" md="7" className="align-self-center colTarjetaService">
                                    <h2 className="title font-bold">Seguridad</h2>
                                    {/* <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p> */}
                                    {/* <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form> */}
                                     <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnService" data-toggle="collapse" href=""><span>MÁS INFO <i className="ti-arrow-right"></i></span></a>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ml-auto colDescService">
                                    {/* <img src={banner} alt="We are Digital Agency" className="img-fluid" /> */}
                                    <Card className="cardService">
                                        <CardBody>
                                            <h5 className="font-medium">Transformación Digital</h5>
                                            <p className="m-t-20">La forma más rápita para integrarte al universo digital con un sitio web adaptado a la necesidad de cada cliente. Diseñamos una solución con las últimas tecnologías y más demandada del mercado.</p>
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
                        </Container>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Seguridad;
