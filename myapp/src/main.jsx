import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountProvider } from "./context/countctx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CountProvider>
    <App />
  </CountProvider>
);