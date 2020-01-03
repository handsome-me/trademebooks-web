import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { BrowserRouter, Route } from 'react-router-dom';

import './css/App.css';

import * as actions from './redux/actions';
import Header from './components/Header';
import Landing from './components/Landing';

class App extends Component {
  constructor() {
    super();
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
            <Header />
            <Route exact path="/" component={Landing} />
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