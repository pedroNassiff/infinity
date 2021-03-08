import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {
    Route,
    BrowserRouter,
    Switch,
    HashRouter
} from "react-router-dom";

import './assets/scss/style.scss';
//import App from './App'
// pages for this product
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import StarsComponent from "./views/custom-components/stars.jsx";

import FormCustomComponents from "./views/custom-components/form";




var hist = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter >
       
       <Switch>
            <Route path="/custom-components" component={CustomComponents} />
            <Route path="/stars" component={StarsComponent} />
            <Route path="/" component={Components} />
            <Route path="/form" component={FormCustomComponents} />
        </Switch>

        
    </BrowserRouter>,
    document.getElementById("root")
);
