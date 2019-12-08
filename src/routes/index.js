import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import App from './App';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={App}
                    />

                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Routes;