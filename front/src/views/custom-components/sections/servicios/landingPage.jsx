import React, { Fragment, useEffect } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import LandingBuilder from '../containers/componentesBuilder/LandingBuilder';
import classes from '../../../../assets/scss/common.scss';

const LandingPage = (props) => {
    return (
  
        <Fragment>
            <main>
                {props.children}
            </main>
            <div className="container-padding mt-5">
                <Container className="containerTituloMargin">
                    <Row>
                        <Col>
                            <h1>INFINITY Servicios</h1>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>
            </div>
        </Fragment>

    );
}

export default LandingPage;