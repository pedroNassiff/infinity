import {
    AGREGAR_COMPONENTE,
    AGREGAR_COMPONENTE_EXITO,
    AGREGAR_COMPONENTE_ERROR,
    COMENZAR_DESCARGA_COMPONENTES,
    DESCARGA_COMPONENTES_EXITO,
    DESCARGA_COMPONENTES_ERROR

} from '../types';

import clienteAxios from '../config/axios';

import Swal from 'sweetalert2';

//crear componente
export function crearNuevoComponenteAction(componente){
    return async (dispatch) => {
      dispatch ( agregarComponente() );  

      try {
         await  clienteAxios.post('/componentes', componente);
        dispatch( agregarComponente(componente));

        //alerta
        Swal.fire(
          'Correcto',
          'El componente se agrego correctamente',
          'success'
        )

      } catch (error){
          console.log(error);
        dispatch( agregarComponenteError(true) );  
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error',
          text: '¡Hubo un error, intenta de nuevo por favor!'
        })
      }

    }
}

const agregarComponente = () => ({
    type: AGREGAR_COMPONENTE,
    payload: true

})

const agregarComponenteExito = componente => ({
     type: AGREGAR_COMPONENTE_EXITO,
    payload: componente

})


const agregarComponenteError = estado => ({
    type: AGREGAR_COMPONENTE_ERROR,
    payload: estado

})

//descargar componentes de la bd
export function obtenerComponentesAction(){
  return async (dispatch) => {
    dispatch( descargarComponentes() );

    try {
      const respuesta = await clienteAxios.get('/componentes');
      dispatch( descargaComponenteExitosa(respuesta.data) )
    } catch (error) {
      console.log(error);
      dispatch( descargaComponentesError() )
    }
  }
}

const descargarComponentes = () => ({
  type:  COMENZAR_DESCARGA_COMPONENTES,
  payload: true
})

const descargaComponenteExitosa = componentes => ({
  type: DESCARGA_COMPONENTES_EXITO,
  payload: componentes
})

const descargaComponentesError = () => ({
  type: DESCARGA_COMPONENTES_ERROR,
  payload: true
})