import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./screens";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
