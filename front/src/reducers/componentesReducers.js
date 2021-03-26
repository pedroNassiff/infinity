import {
    AGREGAR_COMPONENTE,
    AGREGAR_COMPONENTE_EXITO,
    AGREGAR_COMPONENTE_ERROR,
    COMENZAR_DESCARGA_COMPONENTES,
    DESCARGA_COMPONENTES_EXITO,
    DESCARGA_COMPONENTES_ERROR
} from '../types';



//cada reducer tiene su propio state

const initialState = {
    componentes: [],
    error: null,
    loading: false,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case COMENZAR_DESCARGA_COMPONENTES:
        case AGREGAR_COMPONENTE:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_COMPONENTE_EXITO:
            return {
                ...state,
                loading: false,
                componentes: [...state.componentes, action.payload]
            }

        case AGREGAR_COMPONENTE_ERROR:
        case DESCARGA_COMPONENTES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_COMPONENTES_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                componentes: action.payload
            }


        default:
            return state;
    }
}