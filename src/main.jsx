import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./scss/app.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <App />
  </div>
);
