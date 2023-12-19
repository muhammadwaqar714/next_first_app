"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function page() {
  const [apiData, setApiData] = useState([]);
  const handlerData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      // console.log(response.data);
      setApiData(response.data);
    });
  };

  useEffect(() => {
    handlerData();
  }, []);

  const toastify = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  function combinedFunction() {
    handlerData();
    toastify();
  }
  return (
    <div className="text-center">
      <h1 className="text-6xl text-center font-bold bg-green-600 text-white py-5">
        API APP
      </h1>
      <button
        onClick={combinedFunction}
        type="button"
        className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center  mb-2"
      >
        Get API
      </button>

      <ToastContainer></ToastContainer>

      <div className=" w-full border-2 border-red-800 p-10">
        {/* {apiData.map((img, i) => {
          return (
            <img
              key={i}
              src={img.download_url}
              width={300}
              height={300}
              className="mt-10 mx-3 inline-block"
            />
          );
        })} */}
        <div className="flex flex-row flex-wrap gap-1 ">
          {apiData.map((ele, ind) => {
            return (
              <div
                key={ind}
                className="w-[300px] bg-gray-400  my-1 p-1  "
                suppressHydrationWarning
              >
                <div>
                  <h1>{ele.id}</h1>
                  <h1>{ele.title}</h1>
                  <p>{ele.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
