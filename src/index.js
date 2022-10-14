import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserDetails } from "./contexts/userdetails";
import { CenterHide } from "./contexts/messagebars/centerhide";
import { LeftHide } from "./contexts/messagebars/lefthide";
import { RightHide } from "./contexts/messagebars/righthide";

ReactDOM.render(
  <BrowserRouter>
    <LeftHide>
      <CenterHide>
        <RightHide>
          <UserDetails>
            <App />
          </UserDetails>
        </RightHide>
      </CenterHide>
    </LeftHide>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
