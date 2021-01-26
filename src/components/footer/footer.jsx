/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import img1 from '../../assets/images/logos/subse.svg';
import img2 from '../../assets/images/logos/min.svg';
import img3 from '../../assets/images/logos/chaco.svg';




const Footer = () => {
    return (
        <div className="footer4 ">
            <Container className="container-sociales">
            <Row className="row-social">
                   
                   <Col lg="3" md="6">
                       <div className="boton-contacto">
                        <a href="#" className="link-icono-contacto"></a>
                          
                       </div>
                   </Col>
               </Row>
               
               
               <Row>
               <Col lg="6" md="6" className="contenedor-social-footer">
                        <div className="round-social light">
                            <a href="#" className="link"><i className="fa fa-facebook facefooter"></i></a>
                            <a href="#" className="link"><i className="fa fa-instagram facefooter"></i></a>        
                        </div>
                    </Col>
               </Row>
               
            </Container>
            <Row className="contenedor-logos-footer">
                   
                   <Col lg="4" md="6" className="col-subse">
                       <div className="contenedor contenedor-subse">
                       <img src={img1} alt="img" className="img-subse" />                       
                       </div>
                   </Col>
                   <Col lg="4" md="6">
                       <div className="contenedor contenedor-min">
                       <img src={img2} alt="img" className="img-min"  />                       
                       </div>
                   </Col>
                   <Col lg="4" md="6">
                       <div className="contenedor contenedor-chaco">
                       <img src={img3} alt="img" className="img-chaco"  />                       
                       </div>
                   </Col>
               </Row>
        </div>
    );
}
export default Footer;
