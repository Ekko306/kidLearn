// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Watch from "./pages/watch"
import Drag from "./pages/drag"
import Click from "./pages/click"
import DataTable from "./pages/table"


import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";


ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/watch" component={Watch}/>
            <Route path="/drag" component={Drag}/>
            <Route path="/click" component={Click}/>
            <Route path="/table" component={DataTable}/>
            <Redirect from="/" to="/home"/>
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
