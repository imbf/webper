import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import history from '../history';

import Login from "./pages/Login";
import Header from "./Header";
import Main from "./pages/Main";
import DirectoryDetail from "./pages/DirectoryDetail";
import Navbar from "../components/Navbar";

const App = (props) => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Navbar />
                    <Switch>
                        <Route path="/" exact render={() => (<Main cookies={props.cookies} />)} />
                        <Route path="/user_login" exact component={Login} />
                        <Route path="/detail" exact component={DirectoryDetail} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default withCookies(App);