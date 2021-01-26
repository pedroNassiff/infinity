/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import img1 from '../../../assets/images/portfolio/img1.jpg';
import img2 from '../../../assets/images/portfolio/img2.jpg';
import img3 from '../../../assets/images/portfolio/img3.jpg';
import img4 from '../../../assets/images/portfolio/img4.jpg';
import img5 from '../../../assets/images/portfolio/img5.jpg';
import img6 from '../../../assets/images/portfolio/img6.jpg';

const PortfolioComponent = () => {
    return (
        <div>
            <div className="mini-spacer">
                <Container className="contenedor-padre-incentivos">
                    
                    <Row className="contenedor-incentivos">
                        <Row className="justify-content-center">
                        <Col md="7" className="text-center titulo-incentivos">
                        <h1 className="title font-bold title-req">Incentivos para </h1>
                        <h1 className="title font-bold title-req">empleo y vinculación laboral</h1>
                        </Col>
                        </Row>
                    </Row>
                    <Row className="m-t-40 row-contenedora-incentivos">
                        <Col md="3" className="colIncentivos">
                            <Card className="card-shadow card-incentivos">
                                <CardBody>
                                    <h5 className="font-medium m-b-0 titulo-incentivo">Programa de Inserción Laboral </h5>
                                    <h5 className="font-medium m-b-0 titulo-incentivo-flaco">(PIL)</h5>
                                    <p className="m-b-0 font-14 subtitulo-incentivo">Incentivos económicos para empresas para que contraten trabajadores/as desocupados/as, cubriendo una parte del salario por cada nuevo empleo generado en relación de dependencia, por hasta 12 meses.</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3"  className="colIncentivos">
                            <Card className="card-shadow card-incentivos">
                                <CardBody>
                                    <h5 className="font-medium m-b-0 titulo-incentivo">Entrenamiento para el Trabajo</h5>
                                    <h5 className="font-medium m-b-0 titulo-incentivo-flaco">(EPT)</h5>
                                    <p className="m-b-0 font-14 subtitulo-incentivo">Incentivo económico para la formación y experiencia laboral de personas desocupadas, mediante capacitaciones rentadas en empresas, por un tiempo limitado. No se genera relación laboral sino un acuerdo de entrenamiento; luego, la empresa tiene la posibilidad de incorporar esas personas ya entrenadas.</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3"  className="colIncentivos">
                            <Card className="card-shadow card-incentivos">
                                <CardBody>
                                    <h5 className="font-medium m-b-0 titulo-incentivo">Otros Estímulos al Empleo</h5>
                                    <p className="m-b-0 font-14 subtitulo-incentivo">Incentivos económicos para la contratación de personas en determinados sectores de la economía chaqueña (call center, software, hardware y servicios informáticos, confección textil y marroquinería, entre otros).</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3"  className="colIncentivos">
                            <Card className="card-shadow card-incentivos">
                                <CardBody>
                                    <h5 className="font-medium m-b-0 titulo-incentivo">Vinculación Laboral</h5>
                                    <p className="m-b-0 font-14 subtitulo-incentivo">Asistencia a las empresas en los procesos de búsqueda laboral para la contratación de los perfiles requeridos.</p>
                                </CardBody>
                            </Card>
                        </Col>                        
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PortfolioComponent;
