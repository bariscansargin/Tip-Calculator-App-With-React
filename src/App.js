import React, { useState } from "react";
import "./App.css";
import TipForm from "./components/TipForm";
import HeaderTitle from "./components/HeaderTitle";
import ResultArea from "./components/ResultArea";

function App() {
  const [results, setResults] = useState({
    totalAmount: 0,
    tipAmountByPerson: 1,
  });
  const processValue = (bill, tip, numberOfPeople) => {
    const amount = bill + (bill * parseInt(tip)) / 100;
    const personalAmount = amount / parseInt(numberOfPeople <= 0 ? 1 : numberOfPeople);

    return setResults(() => {
      return {
        totalAmount: amount.toFixed(2),
        tipAmountByPerson: personalAmount.toFixed(2),
      };
    });
  };
  const resetTip = () => {

  }

  return (
    <React.Fragment>
      <HeaderTitle />
      <div className="bg-white rounded-lg">
        <div className="flex flex-row p-10">
          <TipForm processValue={processValue} removeItem ={resetTip} />
          <ResultArea
            tipAmountByPerson={results.tipAmountByPerson}
            totalAmountByPerson={results.totalAmount}
            handleClick={resetTip}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
