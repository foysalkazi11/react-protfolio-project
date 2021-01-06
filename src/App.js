import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar, Header, Paricles, AboutMe } from "./components/AllComponents";

const App = () => {
  return (
    <Router>
      <Paricles />
      <NavBar />
      <Header />
      <AboutMe />
    </Router>
  );
};

export default App;
