import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { DashStyle } from "./style";
import { DashConst, usrData } from "./constant";
import { Header, Button } from "components/Form";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, id: 0, show: false, text: 0 };
  }
  userUI = () =>
    usrData.map((a, i) => (
      <div key={i} className="account-info">
        <h2>{DashConst.usd}</h2>
        <p>
          {DashConst.name} {a.name}
        </p>
        <p>
          {DashConst.email} {a.email}
        </p>
        <p>
          {DashConst.blc} {a.balance}
        </p>
        {this.state.id !== a.id && (
          <div className="btntDiv">
            <Button onClick={() => this.btnClick(a.id)}>{DashConst.sm}</Button>
          </div>
        )}
      </div>
    ));
  btnClick = (id) => {
    try {
      let usr = usrData.find((a) => a.id === id);
      this.setState({ id: id, count: usr.balance, show: true });
    } catch (error) {
      console.log(error);
    }
  };
  saveVal = () => {
    try {
      const { count, id } = this.state;
      let inx = usrData.findIndex((a) => a.id === id);
      usrData[inx].balance = count;
      this.cancle();
    } catch (error) {
      console.log(error);
    }
  };
  toggleShow = () => this.setState({ show: !this.state.show });
  toggleCount = (a) => this.setState({ count: this.state.count + parseInt(a) });
  toggleText = (e) => this.setState({ text: e.target.value });
  cancle = () => this.setState({ count: 0, show: false, text: 0, id: 0 });
  render() {
    const { count, show, text } = this.state;
    return (
      <DashStyle>
        <Header />
        <div className="flex">{this.userUI()}</div>
        <div className={`main ${show ? "show" : ""}`}>
          <div className="account-info">
            <div className="row">
              <Button onClick={() => this.toggleCount(-1)}>-</Button>
              <span className="value">{count}</span>
              <Button onClick={() => this.toggleCount(1)}>+</Button>
            </div>
            <div className="row">
              <input
                className="textbox"
                value={text}
                type="number"
                onChange={this.toggleText}
              />
              <Button onClick={() => this.toggleCount(text)}>
                {DashConst.aa}
              </Button>
              <Button onClick={this.saveVal}>{DashConst.save}</Button>
              <Button onClick={this.cancle}>{DashConst.cnc}</Button>
            </div>
          </div>
        </div>
      </DashStyle>
    );
  }
}

export default withRouter(Dashboard);
