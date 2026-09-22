import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { ContextFnc } from "./Components/Context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <ContextFnc>
    <App />
  </ContextFnc>,
);
