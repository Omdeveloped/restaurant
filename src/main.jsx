import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Firstpage from "./Firstpage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Firstpage />
  </StrictMode>
);
