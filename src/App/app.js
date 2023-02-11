import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Routes from "./routes";
import { setAuth } from "redux/login/actions";
import { AppContainer } from "./app.style.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  async componentDidMount() {
    const auth = localStorage.auth;
    if (auth) {
      const userId = JSON.parse(auth).userId;
      await this.props.setAuth(userId);
    }
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
        <AppContainer>
          <Routes isAuthenticated={isAuthenticated} />
        </AppContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
});
const mapStateToDispatch = (dispatch) => ({
  setAuth: (payload) => dispatch(setAuth(payload)),
});
export default withRouter(connect(mapStateToProps, mapStateToDispatch)(App));
