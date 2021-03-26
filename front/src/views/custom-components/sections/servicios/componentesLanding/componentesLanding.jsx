// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import classes from '../../../../../assets/scss/common.scss';

// class ComponentesLanding extends Component  {
//     render () {
//         let componente = null;

//     switch ( this.props.type ) {
//         case ('header-bottom'):
//             componente = <div className={classes.footer-bottom}></div>;
//             break;
//         case ('footer-top'):
//             componente = (
//                 <div className={classes.header-top}>
//                     <div className={classes.header1-top}></div>
//                     <div className={classes.header2-top}></div>
//                  </div> 
//              );
//              break;
        
//         case ('componente-1'):  //Puede ser un producto o servicio
//             componente = <div className={classes.Componente1}></div>;
//             break;
//         case ('componente-2'): //Puede ser un Login
//             componente = <div className={classes.Componente2}></div>;
//             break;
//         case ('componente-3'): //Puede ser un Registro
//             componente = <div className={classes.Componente3}></div>;
//             break;
//         case ('componente-4'): //Puede ser un Carrousel
//             componente = <div className={classes.Componente4}></div>;
//             break;
//         case ('componente-5'): //Puede ser un Banner
//             componente = <div className={classes.Componente5}></div>;
//             break;
//         case ('componente-6'): //Puede ser una Animación
//             componente = <div className={classes.Componente6}></div>;
//             break;
//         case ('componente-7'): //Puede ser una Galeria
//             componente = <div className={classes.Componente7}></div>;
//             break;
//         case ('componente-8'): //Puede ser un Chat
//             componente = <div className={classes.Componente8}></div>;
//             break;
//         case ('componente-9'): //Sección img + texto
//             componente = <div className={classes.Componente9}></div>;
//             break;
//         case ('componente-10'): //Sección video + texto
//             componente = <div className={classes.Componente10}></div>;
//             break;
//         default:
//             componente = null;
//     }
//     return componente;
    
//     }
// }

// ComponentesLanding.PropTypes = {
//     type: PropTypes.string.isRequired
// };

// export default ComponentesLanding;