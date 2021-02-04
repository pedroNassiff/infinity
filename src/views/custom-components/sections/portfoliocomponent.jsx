/* eslint-disable */
import React, { useLayoutEffect, useRef, useState, Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import { Parallax,Background } from 'react-parallax';

import img1 from '../../../assets/images/incentivo/imgAmarilla.svg';

import img8 from '../../../assets/images/incentivo/background-incentivo1.png';
import { CenterFocusStrong } from '@material-ui/icons';
import { Hidden } from '@material-ui/core';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import VisibilitySensor from "react-visibility-sensor";


const inlineStyle = {
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%',
    textAlign: 'center',
}

const parallaxStyle = {
    height: 250,
    width: '100%',
    

}
const style1 = {
    width: '100%',
    height: '100%',
   

}



const PortfolioComponent = (props) => {
    const [focus, setFocus] = React.useState(false);


    return (
        <div>
            <div className="mini-spacer">
                <Container className="contenedor-padre-incentivos">
            
                     <Row className="contenedor-incentivos">
                    
                        <Row className="justify-content-center">
                            <Col  md="2 colImg">
                            <div className="lineasIncentivo"></div>
                            </Col>
                            <Col md="2" className="text-center titulo-incentivos">
                                <Row className="justify-content-center">
                                    <CountUp
                                        className="count1" 
                                        start={focus ? 0 : null} 
                                        end={32.468} 
                                        duration={2}
                                        decimals={3} 
                                        redraw={true}>
                                        {({ countUpRef }) => (
                                            <VisibilitySensor onChange={(isVisible) => {if (isVisible) 
                                            {setFocus(true);}}}>
                                            <span className="count1" ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </Row>
                                <Row className="justify-content-center contBordeAbajo">
                                    <h1 className="title font-bold title-req bordeAbajo">Personas<br/>capacitadas</h1>
                                </Row>
                            </Col>                           
                            <Col md="2" className="text-center titulo-incentivos">
                                <Row className="justify-content-center">
                                <CountUp
                                        className="count1" 
                                        start={focus ? 0 : null} 
                                        end={5.221} 
                                        duration={2}
                                        decimals={3} 
                                        redraw={true}>
                                        {({ countUpRef }) => (
                                            <VisibilitySensor onChange={(isVisible) => {if (isVisible) 
                                            {setFocus(true);}}}>
                                            <span className="count1" ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </Row>
                               
                                    <div className="lineasIncentivo2"></div>
                             
                                <Row className="justify-content-center contBordeAbajo">
                                    <h1 className="title font-bold title-req bordeAbajo">Intermediaciones<br/>laborales realizadas</h1>
                                </Row>
                            </Col>  
                            <Col md="2" className="text-center titulo-incentivos">
                                <Row className="justify-content-center">
                                    <CountUp
                                        className="count1" 
                                        start={focus ? 0 : null} 
                                        end={768} 
                                        duration={2}
                                        //decimals={3} 
                                        redraw={true}>
                                        {({ countUpRef }) => (
                                            <VisibilitySensor onChange={(isVisible) => {if (isVisible) 
                                            {setFocus(true);}}}>
                                            <span className="count1" ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </Row>
                                <div className="lineasIncentivo2"></div>

                                {/* <Row className="justify-content-center ">
                                    <h1 className="title font-bold title-req">Registraciones</h1>
                                </Row> */}
                                <Row className="justify-content-center contBordeAbajo">
                                    <h1 className="title font-bold title-req bordeAbajo">Registraciones<br/>en oficios</h1>
                                </Row>
                            </Col> 
                            <Col md="2" className="text-center titulo-incentivos">
                                <Row className="justify-content-center">
                                    <CountUp
                                        className="count1" 
                                        start={focus ? 0 : null} 
                                        end={611} 
                                        duration={2}
                                        //decimals={3} 
                                        redraw={true}>
                                        {({ countUpRef }) => (
                                            <VisibilitySensor onChange={(isVisible) => {if (isVisible) 
                                            {setFocus(true);}}}>
                                            <span className="count1" ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </Row>
                                <div className="lineasIncentivo2"></div>
                                {/* <Row className="justify-content-center">
                                    <h1 className="title font-bold title-req">Empresas beneficiarias </h1>
                                </Row> */}
                                <Row className="justify-content-center contBordeAbajo">
                                    <h1 className="title font-bold title-req bordeAbajo">Empresas beneficiarias<br/>de incentivos al empleo</h1>
                                </Row>
                            </Col>
                            <Col md="2" className="text-center titulo-incentivos ">
                                <Row className="justify-content-center">
                                    <CountUp
                                        className="count1" 
                                        start={focus ? 0 : null} 
                                        end={5.432} 
                                        duration={2}
                                        decimals={3} 
                                        redraw={true}>
                                        {({ countUpRef }) => (
                                            <VisibilitySensor onChange={(isVisible) => {if (isVisible) 
                                            {setFocus(true);}}}>
                                            <span className="count1" ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </Row>
                                <div className="lineasIncentivo2"></div>
                                {/* <Row className="justify-content-center">
                                    <h1 className="title font-bold title-req">Emprendimientos</h1>
                                </Row> */}
                                <Row className="justify-content-center contBordeAbajo">
                                    <h1 className="title font-bold title-req bordeAbajo">Emprendimientos<br/>asistidos</h1>
                                </Row>
                               
                            </Col> 
                            <Col  md="2 colImg3">
                            <div className="lineasIncentivo3"></div>
                            </Col>
                        </Row>
                        
                    </Row>
                    <Row className="justify-content-center">
                        <div className="contenedor imgIncentivo">
                            <img src={img1} alt="img" className="img-chaco"  />                       
                        </div>
                  </Row>
                     <Row className="justify-content-center">
                      <h1 className="title titleIncentivo">Incentivos para </h1>
                    </Row>
                    <Row className="justify-content-center">
                      <h1 className="title SubtitleIncentivo">empleo y vinculación laboral</h1>
                    </Row>

                    <Row className="m-t-40 row-contenedora-incentivos">
                        <Col md="3" className="colIncentivos">
                            <Card className="card-shadow card-incentivos">
                                <CardBody  className="hvr-float-shadow">
                                    <h5 className="font-medium m-b-0 titulo-incentivo">Programa de</h5>
                                    <h5 className="font-medium m-b-0 titulo-incentivo">Inserción Laboral </h5>
                                    <h5 className="font-medium m-b-0 titulo-incentivo-flaco">(PIL)</h5>
                                    <p className="m-b-0 font-14 subtitulo-incentivo">Incentivos económicos para empresas para que contraten trabajadores/as desocupados/as, cubriendo una parte del salario por cada nuevo empleo generado en relación de dependencia, por hasta 12 meses.</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3"  className="colIncentivos">
                            <Card className="card-shadow card-incentivos">
                                <CardBody className="hvr-float-shadow">
                                    <h5 className="font-medium m-b-0 titulo-incentivo">Entrenamiento</h5>
                                    <h5 className="font-medium m-b-0 titulo-incentivo">para el Trabajo</h5>

                                    <h5 className="font-medium m-b-0 titulo-incentivo-flaco">(EPT)</h5>
                                    <p className="m-b-0 font-14 subtitulo-incentivo">Incentivo económico para la formación y experiencia laboral de personas desocupadas, mediante capacitaciones rentadas en empresas, por un tiempo limitado. No se genera relación laboral sino un acuerdo de entrenamiento; luego, la empresa tiene la posibilidad de incorporar esas personas ya entrenadas.</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3"  className="colIncentivos">
                            <Card className="card-shadow card-incentivos">
                                <CardBody className="hvr-float-shadow">
                                    <h5 className="font-medium m-b-0 titulo-incentivo">Otros Estímulos</h5>
                                    <h5 className="font-medium m-b-0 titulo-incentivo">al Empleo</h5>
                                    <p className="m-b-0 font-14 subtitulo-incentivo">Incentivos económicos para la contratación de personas en determinados sectores de la economía chaqueña (call center, software, hardware y servicios informáticos, confección textil y marroquinería, entre otros).</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3"  className="colIncentivos">
                            <Card className="card-shadow card-incentivos">
                                <CardBody className="hvr-float-shadow">
                                    <h5 className="font-medium m-b-0 titulo-incentivo">Vinculación</h5>
                                    <h5 className="font-medium m-b-0 titulo-incentivo">Laboral</h5>

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
