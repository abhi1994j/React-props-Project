import React from "react";

const Cards = ({key,title,code}) => {
  return (
    <>
      <div
        key={key}
        className={`max-w-sm w-[50%] h-[250px] bg-white border-4 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700`}
      >
        <a href="#">
          <div
            style={{ backgroundColor: code }}
            className="rounded-t-lg w-full h-[150px]"
          >
            
          </div>
        </a>
        <div className="p-1 flex h-[30%] flex-col items-start">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {code}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
