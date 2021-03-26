import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import { crearNuevoComponenteAction } from '../../actions/componentesActions';

import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            backgroundColor: "gray"
        },
    },
}));
const InfinityDocs = ({history}) => {
    const classes = useStyles();

    //state del componentePadre
    const [nombre, guardarNombre] = useState('');
    const [accion, guardarAccion] = useState('');
    const [doc, guardarDoc] = useState('');

    //use Dispatch
    const dispatch = useDispatch();

    //acceder al state del store
    const cargando = useSelector( state => state.componentes.loading);
    const error = useSelector(state => state.componentes.error)

    console.log(cargando);
    
    //mandar llamar el action de componente action
    const agregarComponente = (componente) => dispatch( crearNuevoComponenteAction(componente) );

    //cuando el usuario haga submit
    const submitNuevoComponente = e => {
        e.preventDefault();

        //validar form
        if(nombre.trim() == ''){
            return;
        }
        //si no hay errores

        //crear el nuevo componente
        agregarComponente({
            nombre,
            accion,
            doc
        }
        );

        //redireccionar
        history.push('/Componentes');
    }
    
    return (

        <div className="container-padding mt-5">
            <Container className="containerTituloMargin">
                <Row>
                    <Col>
                        <h1>INFINITY DOCS</h1>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col>
                            <form 
                                className={classes.root} 
                            
                                onSubmit={submitNuevoComponente}
                                >
                                <input 
                                    placeholder="Nombre del Componente"
                                     name="nombre"
                                     value={nombre}
                                     onChange={e => guardarNombre(e.target.value)}
                                />
                                <button type="submit">
                                    Agregar
                                </button>
                            </form>

                            {/* {cargando ? <p>====Cargando====</p> : null} */}
                                 {error ? <p>====error====</p> : null } 
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
export default InfinityDocs;