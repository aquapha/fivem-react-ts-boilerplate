import { EventListener } from "./config/NUI/NUIHandler";
import { AppDataProvider } from "./contexts";
import ReactDOM from "react-dom";
import { App } from "./app";
import React from "react";

import "./styles/globals.css";

ReactDOM.render(
  <React.StrictMode>
    <AppDataProvider>
      <App />
      <EventListener />
    </AppDataProvider>
  </React.StrictMode>,
	document.getElementById("root")
);
