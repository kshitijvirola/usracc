import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import 'antd/dist/reset.css';

import store from "redux/store";
import DashApp from "./app";
import { history } from "../history";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <DashApp />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
