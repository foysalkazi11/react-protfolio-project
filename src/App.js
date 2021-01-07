import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  NavBar,
  Header,
  Paricles,
  AboutMe,
  Skills,
  Project
} from "./components/AllComponents";

const App = () => {
  return (
    <Router>
      <Paricles />
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <Project />
    </Router>
  );
};

export default App;
