import React from 'react';
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';

import animationData from '../animaciones/infinity.json';


import { Container, Row, Col } from 'reactstrap';

import img1 from '../../assets/images/logos/subse.svg';
import img2 from '../../assets/images/logos/min.svg';
import img3 from '../../assets/images/logos/chaco.svg';




const Footer2 = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div>
            <Row md="12" sm="2" className="justify-content-center responsiveRowFooter">
                <Col md="2" >
                    <h1>
                        INFINITY
                    </h1>
                </Col>
                <Col md="3" className="widthColumnFooter">
                    <Row>
                        <h3>
                            CONTACTO
                    </h3>
                    </Row>
                    <Row>

                        <a href="https://wa.link/5wt7cp" target="_blank" rel="noopener noreferrer">
                            <h4>
                                whatsapp
                             </h4>
                        </a>


                    </Row>
                    <Row>

                        <a href=" https://www.linkedin.com/in/pedro-nassiff-somos404infinity/" target="_blank" rel="noopener noreferrer">
                            <h4>
                                LinkedIn
                             </h4>
                        </a>

                    </Row>

                </Col>
                <Col md="3" className="widthColumnFooter">
                    <Row>
                        <h3>
                            OPEN SOURCE
                    </h3>
                    </Row>
                    <Row>
                        <a href="https://github.com/Somos404?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <h4>
                                Github
                             </h4>
                        </a>

                    </Row>
                </Col>
                <Col md="3" className="widthColumnFooter">
                    <Row>
                        <h3>
                            REDES SOCIALES
                    </h3>
                    </Row>
                    <Row>
                        <a href="                    https://www.facebook.com/pedronassiff
"  target="_blank" rel="noopener noreferrer">
                            <h4>
                                Facebook
                             </h4>
                        </a>
                    </Row>
                    <Row>

                        <a href="                              https://www.instagram.com/pedronassiff/
"  target="_blank" rel="noopener noreferrer">
                            <h4>
                                Instagra
                             </h4>
                        </a>
                    </Row>
                    <Row>
        
                    <a href="                                        https://twitter.com/pedronassiff
"  target="_blank" rel="noopener noreferrer">
                            <h4>
                                Twitter
                             </h4>
                        </a>
                    </Row>
                </Col>
                <Col lg="8" md="6" className="align-self-left text-left colanimacionResponsive">
                    <Lottie options={defaultOptions}
                        height={"50%"}
                        width={"81%"}
                      
                        className="lottieREsponsive"
                    />
                    {/* <Col lg="10" className="colImgInf"><img src={img3} className="rounded img-responsive imgColInf" alt="wrappixel" /></Col> */}
                    
                
                        {/*<h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4> */}
                        {/* <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link>*/}
                    </Col>
            </Row>
        </div>
    );
}
export default Footer2;
