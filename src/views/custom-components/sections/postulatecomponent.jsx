/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody, Button } from 'reactstrap';
import Divider from '@material-ui/core/Divider';

import img1 from '../../../assets/images/postulate/icono-postulate.png';
import img2 from '../../../assets/images/postulate/flecha-postulate.png';

const PostulateComponent = () => {
    return (
        <div className="spacer">
            <div className="container-sumate1">
                <Container className="cont1">
                    <Row className="m-t-40">
                        <Col md="12" className="colSumate">
                            <Card className="card-shadow card-sumate1">
                                <CardBody className="card-sumate2">
                                    <Col md="9" className="colSumate">
                                        <Row className="m-t-40 row-sumate">
                                        <h5 className="titulo-postulate">¿Buscas Empleo?</h5>
                                        </Row>
                                        <Row className="m-t-40 row-sumate2">
                                        <Button className="botones-1">Postulate</Button>{' '}
                                        </Row>
                                    </Col>
                                    <Col md="3" className="colSumate2">
                                    <Row>
                                        <a href="https://capacitaciones.chaco.gob.ar/" className="img-ho cont-img3"><img src={img1} alt="img" className="img-responsive img-thumbnail img-redirecciones4" width="200" /></a>
                                        </Row>
                                    </Col>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="12" className="colSumate2">
                        <Col md="3"  className="colSumate">
                            <Card className="card-shadow card-sumate">
                                <CardBody className="card-sumate2">
                                    <Row className="m-t-40 row-sumate row-sumate">
                                    <h5 className="numero-postulate">01</h5>
                                    </Row>
                                    <Row className="m-t-40 row-sumate">
                                    <h6 className="titulo-sumate2">Inscribite</h6>{' '}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3" className="colSumate3">
                            <Row>
                                <a href="https://capacitaciones.chaco.gob.ar/" className="img-ho "><img src={img2} alt="img" className="img-responsive img-thumbnail img-redirecciones3"  /></a>
                            </Row>
                        </Col>
                        <Col md="3"  className="colSumate">
                            <Card className="card-shadow card-sumate">
                                <CardBody className="card-sumate2">
                                    <Row className="m-t-40 row-sumate">
                                    <h5 className="numero-postulate">02</h5>
                                    </Row>
                                    <Row className="m-t-40 row-sumate">
                                    <h6 className="titulo-sumate2">Te llamamos</h6>{' '}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3" className="colSumate4">
                            <Row>
                                <a href="https://capacitaciones.chaco.gob.ar/" className="img-ho "><img src={img2} alt="img" className="img-responsive img-thumbnail img-redirecciones3"  /></a>
                            </Row>
                        </Col>
                        <Col md="3"  className="colSumate">
                            <Card className="card-shadow card-sumate">
                                <CardBody className="card-sumate2">
                                    <Row className="m-t-40 row-sumate">
                                    <h5 className="numero-postulate">03</h5>
                                    </Row>
                                    <Row className="m-t-40 row-sumate">
                                    <h6 className="titulo-sumate2">Sumate a los beneficios</h6>{' '}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>  
                        </Col>
                                              
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PostulateComponent;
