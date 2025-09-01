import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PaperProvider } from "./context/Papercontext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PaperProvider>
        <App />
      </PaperProvider>
    </BrowserRouter>
  </React.StrictMode>
);
