import React from 'react';
import { Row, Col, Container, Form,  Card, CardBody } from 'reactstrap';

import banner from '../../../assets/images/pcont/backSCont.svg';
import Redirecciones from "../sections/redirecciones";

import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({

  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function LandingComponent() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const handleChangeIndex = (index) => {
        setValue(index);
      };
      const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
      };
      const fabs = [
        {
          color: 'primary',
          className: classes.fab,
          icon: <AddIcon />,
          label: 'Add',
        },
        {
          color: 'secondary',
          className: classes.fab,
          icon: <EditIcon />,
          label: 'Edit',
        },
        {
          color: 'inherit',
          className: clsx(classes.fab, classes.fabGreen),
          icon: <UpIcon />,
          label: 'Expand',
        },
      ];

    return (
        <section className="seccionServicios">
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="action tabs example"
                    >
                    <Tab label="Landing Page" {...a11yProps(0)} />
                    <Tab label="Web Api" {...a11yProps(1)} />
                    <Tab label="Cloud Server" {...a11yProps(2)} />
                    <Tab label="E-learning" {...a11yProps(3)} />
                    <Tab label="Seguridad" {...a11yProps(4)} />
                    
                </Tabs>
            </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                         <div id="banner1" className="banner spacer">
                            <Row>
                                <Col lg="5" md="7" className="align-self-center colTarjetaService">
                                    <h2 className="title font-bold">LANDINGPAGE</h2>
                                    {/* <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p> */}
                                    {/* <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form> */}
                                     <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnService" data-toggle="collapse" href=""><span>MÁS INFO <i className="ti-arrow-right"></i></span></a>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ml-auto colDescService">
                                    {/* <img src={banner} alt="We are Digital Agency" className="img-fluid" /> */}
                                    <Card className="cardService">
                                        <CardBody>
                                            <h5 className="font-medium">Transformación Digital</h5>
                                            <p className="m-t-20">La forma más rápita para integrarte al universo digital con un sitio web adaptado a la necesidad de cada cliente. Diseñamos una solución con las últimas tecnologías y más demandada del mercado.</p>
                                            <Row>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Frontend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Backend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Alojamiento<i className="ti-arrow-right"></i></a>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                             </Row>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                         <div id="banner1" className="banner spacer">
                            <Row>
                                <Col lg="5" md="7" className="align-self-center colTarjetaService">
                                    <h2 className="title font-bold">Web Api</h2>
                                    {/* <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p> */}
                                    {/* <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form> */}
                                     <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnService" data-toggle="collapse" href=""><span>MÁS INFO <i className="ti-arrow-right"></i></span></a>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ml-auto colDescService">
                                    {/* <img src={banner} alt="We are Digital Agency" className="img-fluid" /> */}
                                    <Card className="cardService">
                                        <CardBody>
                                            <h5 className="font-medium">Transformación Digital</h5>
                                            <p className="m-t-20">La forma más rápita para integrarte al universo digital con un sitio web adaptado a la necesidad de cada cliente. Diseñamos una solución con las últimas tecnologías y más demandada del mercado.</p>
                                            <Row>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Frontend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Backend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Alojamiento<i className="ti-arrow-right"></i></a>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                             </Row>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                         <div id="banner1" className="banner spacer">
                            <Row>
                                <Col lg="5" md="7" className="align-self-center colTarjetaService">
                                    <h2 className="title font-bold">Cloud Server</h2>
                                    {/* <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p> */}
                                    {/* <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form> */}
                                     <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnService" data-toggle="collapse" href=""><span>MÁS INFO <i className="ti-arrow-right"></i></span></a>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ml-auto colDescService">
                                    {/* <img src={banner} alt="We are Digital Agency" className="img-fluid" /> */}
                                    <Card className="cardService">
                                        <CardBody>
                                            <h5 className="font-medium">Transformación Digital</h5>
                                            <p className="m-t-20">La forma más rápita para integrarte al universo digital con un sitio web adaptado a la necesidad de cada cliente. Diseñamos una solución con las últimas tecnologías y más demandada del mercado.</p>
                                            <Row>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Frontend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Backend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Alojamiento<i className="ti-arrow-right"></i></a>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                             </Row>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                         <div id="banner1" className="banner spacer">
                            <Row>
                                <Col lg="5" md="7" className="align-self-center colTarjetaService">
                                    <h2 className="title font-bold">E-learning</h2>
                                    {/* <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p> */}
                                    {/* <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form> */}
                                     <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnService" data-toggle="collapse" href=""><span>MÁS INFO <i className="ti-arrow-right"></i></span></a>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ml-auto colDescService">
                                    {/* <img src={banner} alt="We are Digital Agency" className="img-fluid" /> */}
                                    <Card className="cardService">
                                        <CardBody>
                                            <h5 className="font-medium">Transformación Digital</h5>
                                            <p className="m-t-20">La forma más rápita para integrarte al universo digital con un sitio web adaptado a la necesidad de cada cliente. Diseñamos una solución con las últimas tecnologías y más demandada del mercado.</p>
                                            <Row>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Frontend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Backend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Alojamiento<i className="ti-arrow-right"></i></a>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                             </Row>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                         <div id="banner1" className="banner spacer">
                            <Row>
                                <Col lg="5" md="7" className="align-self-center colTarjetaService">
                                    <h2 className="title font-bold">Seguridad</h2>
                                    {/* <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p> */}
                                    {/* <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form> */}
                                     <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnService" data-toggle="collapse" href=""><span>MÁS INFO <i className="ti-arrow-right"></i></span></a>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ml-auto colDescService">
                                    {/* <img src={banner} alt="We are Digital Agency" className="img-fluid" /> */}
                                    <Card className="cardService">
                                        <CardBody>
                                            <h5 className="font-medium">Transformación Digital</h5>
                                            <p className="m-t-20">La forma más rápita para integrarte al universo digital con un sitio web adaptado a la necesidad de cada cliente. Diseñamos una solución con las últimas tecnologías y más demandada del mercado.</p>
                                            <Row>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Frontend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Backend<i className="ti-arrow-right"></i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" className="linking text-themecolor">Alojamiento<i className="ti-arrow-right"></i></a>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                             </Row>
                        </div>
                    </TabPanel>
                 </SwipeableViews>                     
            </section>
    
                    
                               
                   
                   
      
    );
}

