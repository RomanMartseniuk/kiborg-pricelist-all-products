import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/fonts.css";
import "./styles/index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
