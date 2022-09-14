import React from "react";
import ReactDOM from "react-dom/client";

// component
import { AppContextProvider } from "./configs";
import App from "./pages/App";

// style bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// custom style
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </React.StrictMode>
);
