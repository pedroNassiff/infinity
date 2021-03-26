import React from "react";
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, Row, Col, Form, Card, CardBody } from 'reactstrap';

import Header from "../../components/header/header.jsx";
import Footer2 from '../../components/footer/footer2';

import { scroller } from 'react-scroll';


import img1 from '../../assets/images/proyectos/misia.PNG';
import img2 from '../../assets/images/proyectos/empleo.PNG';
import img3 from '../../assets/images/proyectos/Lavazza.PNG';
import img4 from '../../assets/images/proyectos/sendpack.PNG';
import img5 from '../../assets/images/proyectos/capacitaciones.PNG';
import img6 from '../../assets/images/proyectos/mpd.PNG';
import img7 from '../../assets/images/proyectos/shujman.PNG';
import img8 from '../../assets/images/proyectos/clemencia.PNG';



// import img2 from '../../../assets/images/blog/blog-home/img2.jpg';
// import img3 from '../../../assets/images/blog/blog-home/img1.jpg';

// import { Canvas } from "react-three-fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import { Physics, usePlane, useBox } from "use-cannon";
// import * as THREE from "three";

// function Box(props) {
//   const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
//   return (
//     <mesh
//       onClick={() => {
//         api.velocity.set(0, 2, 0);
//       }}
//       ref={ref}
//       position={[0, 2, 0]}
//     >
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   );
// }

// function Plane(props) {
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//   }));
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]}>
//       <planeBufferGeometry attach="geometry" args={[100, 100]} />
//       <meshLambertMaterial attach="material" color="lightblue" />
//     </mesh>
//   );
// }

export default function Proyectos() {

    return (


        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
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
            <div className="blog-home2 spacer" id="posproyectospage">
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

                    {/**2do CONTENEDOR*/}
                    <Row className="m-t-40 justify-content-center">
                        <Col lg="6" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img3} alt="wrappixel kit" /></a>
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
                                <h5 className="font-medium m-t-30 tituloProyectos1"><a href="#" className="link">Web Institucional para empresa de Cafè Lavazza</a></h5>
                                <p className="m-t-20 subtituloProyectos">El proyecto se desarollò con Wordpress y Composer para complementar la pontencia de este CMS y desarrollar una web institucional moderna.</p>
                                <a href="https://lavazza-il.kuvut.com/" className="linking text-themecolor m-t-10 btnLinkProyectosLeft"  target="_blank" rel="noopener noreferrer">
                                <div onClick={() => {
                                                    scroller.scrollTo('posproyectospage', {
                                                        duration: 1000,
                                                        delay: 50,
                                                        smooth: true, // linear “easeInQuint” “easeOutCubic”
                                                        offset: 10,
                                                    });
                                                }}>
                                              
                                                </div>
                                    Ir a Lavazza <i className="ti-arrow-right"></i></a>
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
                                <h5 className="font-medium m-t-30 tituloProyectos2"><a href="#" className="link">Sendpack Empresa de Transporte <br /> de Corrientes Argentina</a></h5>
                                <p className="m-t-20 subtituloProyectos2">Proyecto de Aplicaciòn Web para cotizar el envìo de paquetes y mudanzas. Mediante la integraciòn de las Apis de Googles y un algoritmo que desarrollamos con paràmetros (inputs de distancia, peso y demàs) logramos calcular un costo y mediante la integraciòn de Mercado Pago como pasarela se podìa pagar por el servicio. 
El proyecto se desarrollò con ReactJS | Material-ui para el front y NodeJS y MySQL para el Back.</p>
                                <a href="https://sendpack.com.ar/" className="linking text-themecolor m-t-10 btnLinkProyectosRight"  target="_blank" rel="noopener noreferrer">Ir Sendpack <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="6" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top cardImgWidth" src={img4} alt="wrappixel kit" /></a>
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
                  
                
                    <Row className="m-t-40 justify-content-center">
                        <Col lg="6" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img5} alt="wrappixel kit" /></a>
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
                                <h5 className="font-medium m-t-30 tituloProyectos1"><a href="#" className="link">Aula Virtual desarrollada para la Subsecretaría de Empleo del Gobierno de la Provincia del Chaco</a></h5>
                                <p className="m-t-20 subtituloProyectos">espacio de Capacitación es un lugar donde se ofrecen Cursos de Aplicación Práctica para el área TIC's. Dictados por Profesionales que se encuentran ejerciendo en forma independiente sus respectivas profesiones</p>
                                <a href="https://capacitaciones.chaco.gob.ar/" className="linking text-themecolor m-t-10 btnLinkProyectosLeft"  target="_blank" rel="noopener noreferrer">
                                <div onClick={() => {
                                                    scroller.scrollTo('posproyectospage', {
                                                        duration: 1000,
                                                        delay: 50,
                                                        smooth: true, // linear “easeInQuint” “easeOutCubic”
                                                        offset: 10,
                                                    });
                                                }}>
                                              
                                                </div>
                                    Ir a Capacitaciones <i className="ti-arrow-right"></i></a>
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
                                <h5 className="font-medium m-t-30 tituloProyectos2"><a href="#" className="link">Ministerio Público de Defensa</a></h5>
                                <p className="m-t-20 subtituloProyectos2">Sitio web institucional para el MPD de la Provincia del Chaco-Argentina, desarrollado con ReactJS para el frontend, Express para el Backend y MySQL como Base de datos. El sitio está diseñado para compartir noticias, un mapa iteractivo y una biblioteca de descarga de leyes, resoluciones, etc (y dashboard para que los admin puedan cargar los archivos).</p>
                                <a href="https://mpdchaco.com.ar/" className="linking text-themecolor m-t-10 btnLinkProyectosRight"  target="_blank" rel="noopener noreferrer">Ir al Ministerio Público de Defensa <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="6" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img6} alt="wrappixel kit" /></a>
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

                    {/**2do CONTENEDOR*/}
                    <Row className="m-t-40 justify-content-center">
                        <Col lg="6" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img7} alt="wrappixel kit" /></a>
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
                                <h5 className="font-medium m-t-30 tituloProyectos1"><a href="#" className="link">SCHUJMAN - Desarrollos inmobiliarios + ARQUITECTURA</a></h5>
                                <p className="m-t-20 subtituloProyectos">Sitio web institucional para SCHUJMAN,  empresa de más de 20 años en soluciones inmobiliarias sustentables con foco en mejorar la calidad de vida de las personas.</p>
                                <a href="https://schujman.com/" className="linking text-themecolor m-t-10 btnLinkProyectosLeft"  target="_blank" rel="noopener noreferrer">
                                <div onClick={() => {
                                                    scroller.scrollTo('posproyectospage', {
                                                        duration: 1000,
                                                        delay: 50,
                                                        smooth: true, // linear “easeInQuint” “easeOutCubic”
                                                        offset: 10,
                                                    });
                                                }}>
                                              
                                                </div>
                                    Ir a Schujman <i className="ti-arrow-right"></i></a>
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
                                <h5 className="font-medium m-t-30 tituloProyectos2"><a href="#" className="link">Clemencia Bulacio</a></h5>
                                <p className="m-t-20 subtituloProyectos2">Web institucional dónde se presenta las distintas obras de la artista plástica</p>
                                <a href="https://clemenciabulacio.com/" className="linking text-themecolor m-t-10 btnLinkProyectosRight"  target="_blank" rel="noopener noreferrer">Ir a Clemencia <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="6" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top cardImgWidth" src={img8} alt="wrappixel kit" /></a>
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
      
                
            </div>
            <Footer2/>
        </div>
            </div>
        </div>

    );
}

// export default function StarsComponent() {
//   return (
//     <Canvas>
//       <OrbitControls />
//       <Stars />
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 15, 10]} angle={0.3} />
//       <Physics>
//         <Box />
//         <Plane />
//       </Physics>
//     </Canvas>
//   );
// }