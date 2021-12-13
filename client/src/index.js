import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./context/AppContextProvider";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
