import React from 'react';
import { useHistory } from 'react-router-dom';


const Componente = ({componente}) => {
    const { nombre, accion, doc, id } = componente;
    const history = useHistory();

    //función que redirige de forma programada
    const redireccionarEdicion = componente => {
        history.push(`/componentes/editar/${componente.id}`)
    }
    return (
      <tr>
          <td>{nombre}</td>
          <td>{accion}</td>
          <td>{doc}</td>
          <td className="acciones">
                <button 
                    type="button"
                    onClick={ () => redireccionarEdicion(componente)}
                    className="btn btn-primary"
                    >
                    Editar
                </button>
          </td>
      </tr>
    )
}
export default Componente;