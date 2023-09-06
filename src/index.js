import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
//Context
import LoginContextProvider2 from "./context/LoginContextProvider2";

ReactDOM.render(
  <BrowserRouter>
    <LoginContextProvider2>
      <App />
    </LoginContextProvider2>
  </BrowserRouter>,document.getElementById("root"));


