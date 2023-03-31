import React, { useEffect, useState } from "react";
import Button from "./Button";
import { DollarIcon, PersonIcon } from "./Svg";

const TipForm = ({ processValue }) => {
  const [numberIsValid, setNumberIsValid] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [bill, setBill] = useState(0);
  const [billIsValid, setBillIsValid] = useState(false);
  const [tip, setTip] = useState(0);

  //! Functions for Bill
  const billHandler = (event) => {
    setBill(event.target.value);
  };
  useEffect(() => {
    setBillIsValid(bill > 0);
  }, [bill]);
  console.log(bill);
  //! Functions for number of people
  const handlePeopleNumber = (event) => {
    setNumberOfPeople(event.target.value);
  };
  useEffect(() => {
    setNumberIsValid(numberOfPeople > 0);
  }, [numberOfPeople]);

  //! Functions for button

  const handleClick = (event) => {
    setTip(event.target.value);
    event.preventDefault();
  };

  useEffect(() => {
    processValue(bill, tip, numberOfPeople);
  }, [bill, tip, numberOfPeople]);

  return (
    <React.Fragment>
      <div className="flex flex-col text-left w-2/4 ">
        <div className="flex justify-between mt-4">
          <p className="font-mono text-xs text-green-900">Bill</p>
          {!billIsValid && (
            <p className="font-mono text-xs text-orange-600">
              Must be greater than zero !
            </p>
          )}
        </div>

        <div className="relative">
          <DollarIcon className={"absolute inline-block top-2 left-1"} />
          <input
            onChange={billHandler}
            value={bill}
            min="0"
            step="1"
            type="number"
            className="text-right inline-block focus:bg-green-300 focus:border-y-green-300 appearance-none"
          />
        </div>

        <p className="font-mono text-xs text-green-900 my-4">Select Tip %</p>
        <div className="flex">
          <Button handleClick={handleClick} value={5}>
            5%
          </Button>
          <Button handleClick={handleClick} value={10}>
            10%
          </Button>
          <Button handleClick={handleClick} value={15}>
            15%
          </Button>
        </div>
        <div>
          <Button handleClick={handleClick} value={25}>
            25%
          </Button>
          <Button handleClick={handleClick} value={50}>
            50%
          </Button>
        </div>
        <div className="flex justify-between mt-4">
          <p className="font-mono text-xs text-green-900">Number of People</p>
          {!numberIsValid && (
            <p className="font-mono text-xs text-orange-600">Can't be zero !</p>
          )}
        </div>
        <div className="relative mt-4">
          <PersonIcon className={"absolute inline-block top-2 left-1 "} />
          <input
            onChange={handlePeopleNumber}
            value={numberOfPeople}
            min="0"
            step="1"
            type="number"
            className="text-right inline-block focus:bg-green-300 focus:border-y-green-300 appearance-none"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TipForm;
