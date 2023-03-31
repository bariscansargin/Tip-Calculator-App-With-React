import React from "react";


const ResultArea = () => {
  return (
    <div className="bg-green-800 flex flex-col ml-8 rounded-lg w-2/4 p-10 justify-between">
      <div className="flex flex-row justify-between ">
        <div className=" mb-8 mr-8">
          <p className="font-mono text-xs text-white">Tip Amount</p>
          <p className="font-mono text-xs text-white">/person</p>
        </div>
        <div>
          <p className="font-mono text-3xl text-green-200">142.55</p>
        </div>
      </div>
      <div className="flex flex-row justify-between mb-11">
        <div>
          <p className="font-mono text-xs text-white">Total</p>
          <p className="font-mono text-xs text-white">/person</p>
        </div>
        <div>
          <p className="font-mono text-3xl text-green-200">142.55</p>
        </div>
      </div>
      <div>
        <button className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 focus:bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-4">RESET</button>
      </div>
    </div>
  );
};

export default ResultArea;
