import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './css/App.css';

import * as actions from './redux/actions';
import Header from './components/Header';
import Landing from './components/Landing';
import BuyBooks from "./components/BuyBooks";
import SellBooks from "./components/SellBooks";
import Messages from "./components/Messages";
import Settings from "./components/Settings";
import BookStore from "./components/BookStore";
import NotFound from "./components/NotFound";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.actions.fetchUser();
    }

    render() {
        return (
            <div>
                {/* <a className="App-link" href="/auth/google">Login with google</a> */}

                <BrowserRouter>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/buy-books" component={BuyBooks}/>
                            <Route exact path="/sell-books" component={SellBooks}/>
                            <Route exact path="/messages" component={Messages}/>
                            <Route exact path="/settings" component={Settings}/>
                            <Route exact path="/bookstore" component={BookStore}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </BrowserRouter>

            </div>
        );
    }
}

App.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        //courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: actions
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);