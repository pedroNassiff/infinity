import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import img3 from '../../assets/images/header/banerInfinito.svg';

import Lottie from 'react-lottie';
import animationData from '../animaciones/infinity'

const HeaderBanner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center row-banner">
                    <Col lg="8" md="6" className="align-self-center text-center colanimacion">
                    <Lottie options={defaultOptions}
                        height={"50%"}
                        width={"100%"}
                    />
                    {/* <Col lg="10" className="colImgInf"><img src={img3} className="rounded img-responsive imgColInf" alt="wrappixel" /></Col> */}
                    
                
                        {/*<h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4> */}
                        {/* <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link>*/}
                    </Col>
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title-1">SELECCIONA TU MUNDO</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
