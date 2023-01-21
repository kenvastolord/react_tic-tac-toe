import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Board from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Board />
  </StrictMode>
);
