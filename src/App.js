import React from "react";
import { ToastContainer } from "./utility/notification";

import { BrowserRouter as Router } from "react-router-dom";
import {
  NavBar,
  Header,
  Paricles,
  AboutMe,
  Skills,
  Project,
  ContractForm
} from "./components/AllComponents";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Paricles />

        <NavBar />

        <Header />
        <AboutMe />
        <Skills />
        <Project />
        <ContractForm />
      </Router>
    </>
  );
};

export default App;
