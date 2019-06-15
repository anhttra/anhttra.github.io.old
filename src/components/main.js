import React from 'react';
import LandingPage from './landingpage';
import AboutPage from './aboutpage';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
    </Switch>
)

export default Main;