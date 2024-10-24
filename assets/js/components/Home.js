// ./assets/js/components/Home.js

import React, {Component} from 'react';
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import SetupCheck from "./SetupCheck";
import Rates from "./Rates";

class Home extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className={"navbar-brand"} to={"/"}> Telemedi Zadanko 123 </Link>
                    <div id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/rates"}> Rates</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/setup-check"}> React Setup Check </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Redirect exact from="/" to="/rates"/>
                    <Route path="/rates" component={Rates}/>
                    <Route path="/setup-check" component={SetupCheck}/>
                </Switch>
            </div>
        )
    }
}

export default Home;
