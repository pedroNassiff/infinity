

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import './assets/scss/style.scss';
//import App from './App'
// pages for this product
import Components from "./views/components/components.jsx";
import Proyectos from "./views/custom-components/proyectos.jsx";
import InfinityDocs from "./views/custom-components/infinityDocs.jsx";
import Componentes from "./views/custom-components/Componentes.jsx";
import EditarComponentes from "./views/custom-components/EditarComponentes.jsx";


import CustomComponents from "./views/custom-components/custom-components.jsx";
import StarsComponent from "./views/custom-components/proyectos.jsx";
import Nosotros from "./views/custom-components/nosotros.jsx";
import Loader from "./views/custom-components/sections/Loader.jsx";

import Header from "./components/header/header.jsx";
import HeaderBanner from "./components/banner/banner";
import Footer2 from "./components/footer/footer2.jsx";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormCustomComponents from "./views/custom-components/form";

import LandingPage from "./views/custom-components/sections/servicios/landingPage";
import LandingBuilder from './views/custom-components/sections/containers/componentesBuilder/LandingBuilder';
 import "./styles.css";
// import "./assets/scss/common.scss";


import { Provider } from 'react-redux';
import store from './store';

var hist = createBrowserHistory();

function App() {

  return (
    <Router>
      <Provider store={store}>
        <Loader />
        <Header />


        <Switch>
          <Route path="/custom-components" component={CustomComponents} />
          <Route
            path="/proyectos" component={StarsComponent} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/infinity-docs" component={InfinityDocs} />
          <Route path="/Componentes" component={Componentes} />
          <Route path="/editarComponentes" component={EditarComponentes} />

          {/* <Route path="/servicios-landing" component={LandingPage} /> */}



          <Route path="/" component={Components} />
          {/* <Route path="/proyectos" component={Proyectos} /> */}

          <Route path="/form" component={FormCustomComponents} />
        </Switch>


      </Provider>

    </Router>
  );
}
export default App;
