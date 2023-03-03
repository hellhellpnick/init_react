import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import * as themes from "theme/schema.json";
import { setToLS } from "utils/storage";

setToLS("all-themes", themes.default);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
