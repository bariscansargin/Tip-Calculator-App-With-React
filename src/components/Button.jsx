import React from "react";

const buttonActiveStyling =
  "focus:outline-none text-white bg-green-800 hover:bg-green-500 focus:ring-4 focus:ring-green-300 focus:bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-4";

const buttonDefaultStyling =
  " text-white bg-green-800 hover:bg-green-500  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-4";

const Button = ({ children, handleClick, value }) => {
  return (
    <button value={value} onClick={handleClick} className={buttonActiveStyling}>
      {children}
    </button>
  );
};

export default Button;
