import React, { Fragment, useEffect } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Componente from './Componente';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerComponentesAction } from '../../actions/componentesActions';

const Componentes = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        //consulta a la api
        const cargarComponentes = () => dispatch( obtenerComponentesAction() );
        cargarComponentes();
    }, []);

    //OBTENER EL STATE
    const componentes = useSelector( state => state.componentes.componentes );
    const error = useSelector(state => state.componentes.error);
    return (
        <Fragment>
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
                                <h2>Listado de componentes</h2>
                                { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null }
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Acciones</th>
                                            <th>DOC</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { componentes.lenght === 0 ? 'No hay componentes' : (
                                            componentes.map(componente => (
                                                <Componente
                                                    key={componente.id}
                                                    componente={componente}
                                                />
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        </Fragment>
    );
}
export default Componentes;