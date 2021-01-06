import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  NavBar,
  Header,
  Paricles,
  AboutMe,
  Skills
} from "./components/AllComponents";

const App = () => {
  return (
    <Router>
      <Paricles />
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
    </Router>
  );
};

export default App;
