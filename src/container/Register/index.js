import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Register extends Component {
    render(){
        return<div>gh</div>
    }
}

const mapStateToProps = (state) => ({
    // loading: state.login.loading,
    // error: state.login.error,
    // message: state.login.message,
  });
  const mapDispatchToProps = (dispatch) => ({
    // login: (payload) => dispatch(login(payload)),
  });
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));