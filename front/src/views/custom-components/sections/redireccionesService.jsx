/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";
import img1 from '../../../assets/images/iconos/capacitaciones.png';
import img2 from '../../../assets/images/iconos/empleo.png';
import img3 from '../../../assets/images/iconos/oficios.png';
import img4 from '../../../assets/images/iconos/empresas.png';
import img5 from '../../../assets/images/iconos/emprendimientos.png';


const RedireccionesService = () => {
    return (
        <div>
            <div className="backReq">
                <Container className="containerRequerimientosEscritorio">
                    <Row className="m-t-40 colRed rowServicios">
                        <Col md="3" className="colRequerimientos">
                            <a className="linkRedirecciones" href="/" target="_blank" rel="noopener noreferrer">
                                 <Card 
                                    className="card-shadow card-req">
                                        <CardBody className="card-body-req">
                                            {/* <Row>
                                                <a  className="img-ho cont-img"><img src={img1} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                                            </Row> */}
                                                <h5 className="font-medium m-b-0 titulo-requerimientos">LANDING PAGE</h5>
                                                <hr className="linea-redirecciones"/>
                                                
                                        </CardBody>
                                </Card>
                            </a>
                        </Col> 
                        <Col md="3" className="colRequerimientos">
                            <a className="linkRedirecciones" href="https://docs.google.com/forms/d/e/1FAIpQLSf2BKiBwquELxdINd3iM_VMC7bFh-35umaWa_VhEjxNk50sjg/viewform" target="_blank" rel="noopener noreferrer">
                                <Card className="card-shadow card-req">
                                    <CardBody 
                                    className="card-body-req"
                                    >
                                        {/* <Row>
                                            <a className="img-ho cont-img"><img src={img2} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                                        </Row> */}
                                            <h5 className="font-medium m-b-0 titulo-requerimientos">API REST FULL</h5>
                                            <hr className="linea-redirecciones"/>
                                            {/* <p className="m-b-0 font-14 subtitulo-requerimientos">Postulación
                                                                                                    a búsquedas
                                                                                                        laborales.</p> */}
                                    </CardBody>
                                </Card>
                            </a> 
                        </Col>
                        <Col md="3" className="colRequerimientos">
                            <a className="linkRedirecciones" href="https://docs.google.com/forms/d/e/1FAIpQLSdI_-U-i2_UemVLFX23auRufzVvd-m6ZY_Uic3uEixAZaqyDA/viewform" target="_blank" rel="noopener noreferrer">
                                <Card className="card-shadow card-req">
                                    <CardBody className="card-body-req">
                                        {/* <Row>
                                             <a className="img-ho cont-img"><img src={img3} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                                        </Row> */}
                                             <h5 className="font-medium m-b-0 titulo-requerimientos">CLOUD SERVER</h5>
                                            <hr className="linea-redirecciones"/>
                                            {/* <p className="m-b-0 font-14 subtitulo-requerimientos">Herramientas
                                                                                                    de promoción y 
                                                                                                        comercialización</p> */}
                                    </CardBody>
                                </Card>
                            </a>
                         </Col>
                        <Col md="3" className="colRequerimientos">
                            <a href="/" target="_blank" rel="noopener noreferrer" className="linkRedirecciones">
                                <Card className="card-shadow card-req">
                                    <CardBody className="card-body-req">
                                        {/* <Row>
                                            <a className="img-ho cont-img"><img src={img4} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                                        </Row> */}
                                            <h5 className="font-medium m-b-0 titulo-requerimientos">ELEARNING</h5>
                                            <hr className="linea-redirecciones"/>
                                            {/* <p className="m-b-0 font-14 subtitulo-requerimientos">Programas y
                                                                                                    beneficios para 
                                                                                                        contratar y 
                                                                                                            capacitar personal.</p> */}
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col md="3" className="colRequerimientos">
                            <a className="linkRedirecciones" href="https://docs.google.com/forms/d/e/1FAIpQLSdmgQi-o9ScNzxUKeGMl7-1ODUKWyfN5UxBFOz-10MMQIcZmA/viewform" target="_blank" rel="noopener noreferrer" >
                                <Card className="card-shadow card-req">
                                    <CardBody className="card-body-req">
                                        {/* <Row>
                                             <a className="img-ho cont-img"><img src={img5} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                                        </Row> */}
                                             <h5 className="font-medium m-b-0 titulo-requerimientos">SEGURIDAD</h5>
                                            <hr className="linea-redirecciones"/>
                                            {/* <p className="m-b-0 font-14 subtitulo-requerimientos">Herramientas de 
                                                                                                    promoción, 
                                                                                                     comercialización
                                                                                                        y financiamiento.</p> */}
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>                       
                    </Row>
                </Container>
            </div>
                {/** REQUERIMIENTOS RESPONSIVE **/}
                <div className="divReqResponsive">
                    <Container className="containerRequerimientosResponsive">
                        <Col className="m-t-40">
                            <Row md="3" className="colRequerimientos">
                                <a className="linkRedirecciones" href="https://capacitaciones.chaco.gob.ar/" target="_blank" rel="noopener noreferrer">
                                    <Card 
                                        className="card-shadow card-req">
                                            <CardBody className="card-body-req">
                                                <Row>
                                                    <a  className="img-ho cont-img"><img src={img1} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                                                </Row>
                                                    <h5 className="font-medium m-b-0 titulo-requerimientos tituloRequerimientosResponsive1">Capacitaciones</h5>
                                                    <hr className="linea-redirecciones1"/>
                                                    <p className="m-b-0 font-14 subtitulo-requerimientos1">Cursos para tu 
                                                                                                            formación laboral 
                                                                                                                y emprendedora</p>
                                            </CardBody>
                                    </Card>
                                </a>
                            </Row> 
                            <Row md="3" className="colRequerimientos">
                                <a className="linkRedirecciones" href="https://docs.google.com/forms/d/e/1FAIpQLSf2BKiBwquELxdINd3iM_VMC7bFh-35umaWa_VhEjxNk50sjg/viewform" target="_blank" rel="noopener noreferrer">
                                    <Card className="card-shadow card-req">
                                        <CardBody 
                                        className="card-body-req"
                                        >
                                            <Row>
                                                <a className="img-ho cont-img"><img src={img2} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                                            </Row>
                                                <h5 className="font-medium m-b-0 titulo-requerimientos tituloRequerimientosResponsive2">Empleo</h5>
                                                <hr className="linea-redirecciones2"/>
                                                <p className="m-b-0 font-14 subtitulo-requerimientos2">Postulación
                                                                                                        a búsquedas
                                                                                                            laborales.</p>
                                        </CardBody>
                                    </Card>
                                </a> 
                            </Row>
                            <Row md="3" className="colRequerimientos">
                                <a className="linkRedirecciones" href="https://docs.google.com/forms/d/e/1FAIpQLSdI_-U-i2_UemVLFX23auRufzVvd-m6ZY_Uic3uEixAZaqyDA/viewform" target="_blank" rel="noopener noreferrer">
                                    <Card className="card-shadow card-req">
                                        <CardBody className="card-body-req">
                                            <Row>
                                                <a className="img-ho cont-img"><img src={img3} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                                            </Row>
                                                <h5 className="font-medium m-b-0 titulo-requerimientos tituloRequerimientosResponsive">Oficios</h5>
                                                <hr className="linea-redirecciones"/>
                                                <p className="m-b-0 font-14 subtitulo-requerimientos">Herramientas
                                                                                                        de promoción y 
                                                                                                            comercialización</p>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Row>
                            <Row md="3" className="colRequerimientos">
                                <a href="/" target="_blank" rel="noopener noreferrer" className="linkRedirecciones">
                                    <Card className="card-shadow card-req">
                                        <CardBody className="card-body-req">
                                            <Row>
                                                <a className="img-ho cont-img"><img src={img4} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                                            </Row>
                                                <h5 className="font-medium m-b-0 titulo-requerimientos tituloRequerimientosResponsive">Empresas</h5>
                                                <hr className="linea-redirecciones"/>
                                                <p className="m-b-0 font-14 subtitulo-requerimientos">Programas y
                                                                                                        beneficios para 
                                                                                                            contratar y 
                                                                                                                capacitar personal.</p>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Row>
                            <Row md="3" className="colRequerimientos">
                                <a className="linkRedirecciones" href="https://docs.google.com/forms/d/e/1FAIpQLSdmgQi-o9ScNzxUKeGMl7-1ODUKWyfN5UxBFOz-10MMQIcZmA/viewform" target="_blank" rel="noopener noreferrer" >
                                    <Card className="card-shadow card-req">
                                        <CardBody className="card-body-req">
                                            <Row>
                                                <a className="img-ho cont-img"><img src={img5} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></a>
                                            </Row>
                                                <h5 className="font-medium m-b-0 titulo-requerimientos tituloRequerimientosResponsive">Emprendimientos</h5>
                                                <hr className="linea-redirecciones"/>
                                                <p className="m-b-0 font-14 subtitulo-requerimientos">Herramientas de 
                                                                                                        promoción, 
                                                                                                        comercialización
                                                                                                            y financiamiento.</p>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Row>                       
                        </Col>
                    </Container>
                </div>
        </div>
    );
}

export default RedireccionesService;
