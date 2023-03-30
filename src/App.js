import React from "react";
import "./App.css";
import TipForm from "./components/TipForm";
import HeaderTitle from "./components/HeaderTitle";

function App() {
  return (
    <React.Fragment>
      <HeaderTitle />
      <TipForm />
    </React.Fragment>
  );
}

export default App;
