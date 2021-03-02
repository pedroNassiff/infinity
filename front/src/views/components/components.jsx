import React from "react";
import PropTypes from "prop-types";



// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// secciones

import PortfolioComponent from "../custom-components/sections/portfoliocomponent";
import Redirecciones from "../custom-components/sections/redirecciones";
import RedireccionesService from "../custom-components/sections/redireccionesService";

import Sumate from "../custom-components/sections/sumatecomponent";
import Postulate from "../custom-components/sections/postulatecomponent";

import FormBannerComponent from "../custom-components/sections/landing";
import ApirestComponent from "../custom-components/sections/apirest.jsx";
import AlojamientoComponent from "../custom-components/sections/alojamiento.jsx";
import ElearningComponent from "../custom-components/sections/elearning.jsx";
import SeguridadComponent from "../custom-components/sections/seguridad.jsx";


import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
// import { Physics, usePlane, useBox } from "use-cannon";
import "./styles.css";
import { Keyframes, animated, config } from 'react-spring/renderprops'
import delay from 'delay'

function Box() {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" />

            <meshBasicMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

const Content = Keyframes.Spring(async next => {
    // None of this will cause React to render, the component renders only once :-)
    while (true) {
      await next({
        from: { opacity: 0, width: 50, height: 50, background: 'black' },
        opacity: 1,
        width: 80,
        height: 80,
        background: 'tomato',
      })
      await next({
        from: { left: '0%' },
        left: '70%',
        background: 'seagreen',
      })
      next({
        from: { top: '0%' },
        top: '80%',
        background: 'plum',
        config: config.wobbly,
      })
      await delay(2000) // don't wait for the animation above to finish, go to the next one in 2s
      await next({ left: '20%', background: 'hotpink' })
      await next({
        top: '50%',
        background: 'teal',
      })
      await next({
        opacity: 0,
        width: 40,
        height: 40,
        background: 'black',
      })
    }
  })


const Components = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
            
                    <HeaderBanner />
                    {/* <Canvas>
                  
                  <OrbitControls />
                  <Stars />
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 15, 10]} angle={0.3} />
                  <Box />
                  </Canvas> */}
                        {/* <div
                            style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            background: 'aquamarine',
                            padding: 10,
                            }}>
                            <Content native>
                            {props => (
                                <animated.div
                                style={{ position: 'relative', borderRadius: '50%', ...props }}
                                />
                            )}
                            </Content>
                        </div> */}
                    <Redirecciones />
               
                    <FormBannerComponent />
                    <RedireccionesService />
                    <ApirestComponent />
                    <RedireccionesService />
                    <AlojamientoComponent />
                    <RedireccionesService />
                    <ElearningComponent />
                    <RedireccionesService />
                    <SeguridadComponent />
                    <RedireccionesService />
                    {/* <PortfolioComponent />
                    <Sumate />
                    <Postulate /> */}
                    
                </div>
            </div>
            {/* <Footer />  */}
        </div>
    );
}

Components.propTypes = {
    classes: PropTypes.object
};

export default Components;
