import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar, Header, Paricles } from "./components/AllComponents";

const App = () => {
  return (
    <Router>
      <Paricles />
      <NavBar />
      <Header />
    </Router>
  );
};

export default App;
