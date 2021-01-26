/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import img1 from '../../../assets/images/iconos/capacitaciones.png';
import img2 from '../../../assets/images/iconos/empleo.png';
import img3 from '../../../assets/images/iconos/oficios.png';
import img4 from '../../../assets/images/iconos/empresas.png';
import img5 from '../../../assets/images/iconos/emprendimientos.png';


const Redirecciones = () => {
    return (
        <div>
            <div className="mini-spacer">
                <Container>
                    <Row className="m-t-40">
                        <Col md="3" className="colRequerimientos">
                            <Card className="card-shadow card-req">
                            <CardBody className="card-body-req">
                            <Row>
                            <a href="https://capacitaciones.chaco.gob.ar/" className="img-ho cont-img"><img src={img1} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                            </Row>
                            <h5 className="font-medium m-b-0 titulo-requerimientos">Capacitaciones</h5>
                                    <p className="m-b-0 font-14 subtitulo-requerimientos">Cursos para tu 
                                    formación laboral 
                                    y emprendedora</p>
                            </CardBody>
                            </Card>
                        </Col>

                                   
                        <Col md="3" className="colRequerimientos">
                            <Card className="card-shadow card-req">
                            <CardBody className="card-body-req">
                            <Row>
                            <a href="https://capacitaciones.chaco.gob.ar/" className="img-ho cont-img"><img src={img2} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                            </Row>
                            <h5 className="font-medium m-b-0 titulo-requerimientos">Empleo</h5>
                                    <p className="m-b-0 font-14 subtitulo-requerimientos">Postulación
                                    a búsquedas
                                    laborales.</p>
                            </CardBody>
                            </Card>
                        </Col>
                        <Col md="3" className="colRequerimientos">
                            <Card className="card-shadow card-req">
                            <CardBody className="card-body-req">
                            <Row>
                            <a href="https://capacitaciones.chaco.gob.ar/" className="img-ho cont-img"><img src={img3} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                            </Row>
                            <h5 className="font-medium m-b-0 titulo-requerimientos">Oficios</h5>
                                    <p className="m-b-0 font-14 subtitulo-requerimientos">Herramientas
                                    de promoción y 
                                    comercialización</p>
                            </CardBody>
                            </Card>
                        </Col>
                        <Col md="3" className="colRequerimientos">
                            <Card className="card-shadow card-req">
                            <CardBody className="card-body-req">
                            <Row>
                            <a href="https://capacitaciones.chaco.gob.ar/" className="img-ho cont-img"><img src={img4} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                            </Row>
                            <h5 className="font-medium m-b-0 titulo-requerimientos">Empresas</h5>
                                    <p className="m-b-0 font-14 subtitulo-requerimientos">Programas y
                                    beneficios para 
                                    contratar y 
                                    capacitar personal.</p>
                            </CardBody>
                            </Card>
                        </Col>
                        <Col md="3" className="colRequerimientos">
                            <Card className="card-shadow card-req">
                            <CardBody className="card-body-req">
                            <Row>
                            <a href="https://capacitaciones.chaco.gob.ar/" className="img-ho cont-img"><img src={img5} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                            </Row>
                            <h5 className="font-medium m-b-0 titulo-requerimientos">Emprendimientos</h5>
                                    <p className="m-b-0 font-14 subtitulo-requerimientos">Herramientas de 
                                    promoción, 
                                    comercialización
                                    y financiamiento.</p>
                            </CardBody>
                            </Card>
                        </Col>                       
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Redirecciones;
