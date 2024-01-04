import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./Main.css";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <TopSection />
    <App />
    <BottomSection />
  </>
);
