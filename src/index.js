import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import App from "./app";
import store from "./store";
import history from "./history";
import { LocaleProvider } from "antd";
import ruRU from "antd/lib/locale-provider/ru_RU";
import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={ruRU}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </LocaleProvider>
  </Provider>,
  document.getElementById("root")
);
