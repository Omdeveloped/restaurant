import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Firstpage from "./Firstpage.jsx";
import Mesh from "./Mesh.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Firstpage />
    <Mesh name="content" price="20" />
  </StrictMode>
);
