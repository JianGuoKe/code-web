import React from "react";
import ReactDOM from "react-dom/client";
import "./index.less";
import App from "./App";
import { ConfigProvider } from "antd";
import reportWebVitals from "./reportWebVitals";
import { state } from "./StateDexie";
import { Desktop } from "./Desktop";
import './tracker';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

console.log(
  "%c[邀请]:你已经看到这了,可以来github共建此项目 https://github.com/JianGuoKe/code-web",
  "color: #43bb88; font-weight: bold; "
);

state.init().then(() => {
  root.render(
    <React.StrictMode>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
          },
        }}
      >
        <App />
        <Desktop></Desktop>
      </ConfigProvider>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
