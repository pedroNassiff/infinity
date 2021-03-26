import React from 'react';
import Header from "../../components/header/header.jsx";
import Footer2 from '../../components/footer/footer2';


import { Row, Col, Container, Card, CardBody } from 'reactstrap';


const Nosotros = () => {
    return (
       
        <div className="containerGeneralBlack">
                   <Header />

{/* <!-- Section 1 --> */}
<section className="w-full bg-black pt-7 pb-7 md:pt-20 md:pb-24 justify-content-center">
<Row  className="justify-content-center">
    <Col>
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        {/* <!-- Image --> */}
        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 imgResponsiveNosotros" />
        </div>
        <Container className="containerContenidoWidth">
        <Row className="justify-content-center">
            <Col>
            <Row className="paddingTextosResponsive">
            <h2 className="m-0 text-xl font-bold leading-tight border-0 border-white-300 lg:text-3xl md:text-2xl tituloNosotros">
Nuestra Escencia            </h2>
            </Row>
            <Row className="paddingTextosResponsive">
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            Estamos enfocados en ofrecer una solución personalizada, estudiando y analizando la necesidad del cliente, su entorno y su compentencia. El alcance del impacto de los resultados de la empresa están fuertemente vinculado al diseño y planificación de una estrategia sólida y dinámica, en el sentido de enforcarse directamente en los objetivos adaptando los procesos a un ambiente dinámico, el cuál se irá ajustando al entorno en el cual se desarrolla el proyecto.
            </p>
            </Row>
         
           <div className="spacer feature4">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <span className="label label-danger label-rounded"></span>
                            {/* <h2 className="title">Awesome with Extra Ordinary Flexibility</h2> */}
                            {/* <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6> */}
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        <Col md="6" className="wrap-feature4-box">
                            <Card className="cardHeight">
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-star"></i></div>
                                    <h5 className="font-medium">Soluciones Personalizadas</h5>
                                    <p className="m-t-20">Uno de los mayores desafíos de la comunicación digital es superar ese límite donde cruzamos a lo distinto, a generar experiencias personalizadas, adentrarnos dentro de cada universo-proyecto en búsqueda de lo nuevo y extraordinario.</p>
                                    <a href="https://wa.link/5wt7cp" target="_blank" rel="noopener noreferrer"className="linking text-themecolor">Re si <i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" className="wrap-feature4-box">
                            <Card className="cardHeight">
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-check-circle"></i></div>
                                    <h5 className="font-medium">Innovación</h5>
                                    <p className="m-t-20">Romper y desconstruir los esquemas actuales para optmizarlos y ofrecer nuevas alternativas que nos diferencien de lo vulgar.</p>
                                    <a className="linking text-themecolor" href="https://wa.link/5wt7cp" target="_blank" rel="noopener noreferrer">Recontra re si <i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        
          
     
        {/* <!-- End  Content --> */}
            </Col>
        </Row>
           
        </Container>
       
      
            
    </div>
    </Col>
</Row>
<Row  className="justify-content-center">
    <Col>
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        {/* <!-- Image --> */}
        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 imgResponsiveNosotros " />
        </div>
        <Container className="containerContenidoWidth">
        <Row className="justify-content-center">
            <Col>
            <Row className="paddingTextosResponsive">
            <h2 className="m-0 text-xl font-bold leading-tight border-0 border-white-300 lg:text-3xl md:text-2xl tituloNosotros">
Nuestra Objetivo            </h2>
            </Row>
            <Row className="paddingTextosResponsive">
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            Crear un Universo de Desarrollo en busqueda de soluciones y acciones para crecer, aprender y esforzarse para superar los desafíos implementando última tecnología e innovando para mejorar todos los días.
            </p>
            </Row>
         
           <div className="spacer feature4">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <span className="label label-danger label-rounded"></span>
                            {/* <h2 className="title">Awesome with Extra Ordinary Flexibility</h2> */}
                            {/* <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6> */}
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        <Col md="6" className="wrap-feature4-box">
                            <Card className="cardHeight">
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-star"></i></div>
                                    <h5 className="font-medium">Planificación Estratégica</h5>
                                    <p className="m-t-20">Una base fuerte dentro del análisis y estudio interno y externo para lograr una planificación estratégica que se adapte a los reusltados que esperamos obtener para cumplir con los objetivos de todos los días.</p>
                                    <a href="#" className="linking text-themecolor" href="https://wa.link/5wt7cp" target="_blank" rel="noopener noreferrer">Re si<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" className="wrap-feature4-box">
                            <Card className="cardHeight">
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-check-circle"></i></div>
                                    <h5 className="font-medium">Tecnología de punta</h5>
                                    <p className="m-t-20">La adaptación al desarrollo tecnológico nos lleva a una capacitación constante para ofrecer soluciónes que logren satisfacer las demandas actuales.</p>
                                    <a className="linking text-themecolor" href="https://wa.link/5wt7cp" target="_blank" rel="noopener noreferrer">Re contra re si<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        
          
     
        {/* <!-- End  Content --> */}
            </Col>
        </Row>
           
        </Container>
       
      
            
    </div>
    </Col>
</Row>
</section>


         </div>
    )
}

export default Nosotros;