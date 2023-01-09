import React from "react";
import MetaTags from "./components/MetaTags/MetaTags";
import Headers from "./components/Header/Header";
import "./App.css";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <>
      <MetaTags />
      <Headers />
      <Home />
    </>
  );
};

export default App;
