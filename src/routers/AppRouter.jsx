import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';

import Timer from '../components/pomodoro/Timer';


class AppRouter extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div className="container">
                        <Switch>
                           
                            <Route path="/pomodoro" component={Timer}/>
                           
                        </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default AppRouter;