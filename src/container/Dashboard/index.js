import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { DashStyle } from "./style";
import { Header } from "components/Form";
import { usrData } from "./constant";

class Dashboard extends Component {
  userUI = () =>
    usrData.map((a, i) => (
      <div key={i} className="account-info">
        <h2>User Account Info</h2>
        <p>Name: {a.name}</p>
        <p>Email: {a.email}</p>
        <p>Balance: {a.balance}</p>
      </div>
    ));
  render() {
    return (
      <DashStyle>
        <Header />
        <div className="flex">{this.userUI()}</div>
      </DashStyle>
    );
  }
}

export default withRouter(Dashboard);
