import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PaperProvider } from "./context/Papercontext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FirebaseProvider } from "./context/FirebaseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <PaperProvider>
          <App />
        </PaperProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
