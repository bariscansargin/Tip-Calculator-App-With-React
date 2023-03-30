import React, { useEffect, useState } from "react";
import Button from "./Button";
import { DollarIcon, PersonIcon } from "./Svg";

const TipForm = () => {
  const [numberIsValid, setNumberIsValid] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [bill, setBill] = useState(0);

  //! Functions for Bill
  const billHandler = (event) => {
    setBill(event.target.value);
  };
  console.log(bill);
  //! Functions for number of people
  const handlePeopleNumber = (event) => {
    setNumberOfPeople(event.target.value);
  };
  useEffect(() => {
    setNumberIsValid(numberOfPeople > 0);
  }, [numberOfPeople]);

  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="flex flex-row p-10">
          <div className="flex flex-col text-left ">
            <p className="font-mono text-xs text-green-900">Bill</p>
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

            <p className="font-mono text-xs text-green-900 my-4">
              Select Tip %
            </p>
            <div className="flex">
              <Button>5%</Button>
              <Button>10%</Button>
              <Button>15%</Button>
            </div>
            <div>
              <Button>25%</Button>
              <Button>50%</Button>
            </div>
            <div className="flex justify-between mt-4">
              <p className="font-mono text-xs text-green-900">
                Number of People
              </p>
              {!numberIsValid && (
                <p className="font-mono text-xs text-orange-600">
                  Can't be zero !
                </p>
              )}
            </div>
            <div className="relative mt-4">
              <PersonIcon className={"absolute inline-block top-2 left-1 "} />
              <input
                onChange={handlePeopleNumber}
                min="0"
                step="1"
                type="number"
                className="text-right inline-block focus:bg-green-300 focus:border-y-green-300 appearance-none"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TipForm;
