import React, { useState } from "react";

import DoctorList1 from "./Doctor/DoctorList1";
import { useParams } from "react-router-dom";

const FindDoctor = () => {

  let { city } = useParams();
  const [name, setName] = useState("");

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <div className="width-full">
      <section>
        <div className="bg-teal-500">
          <div class="container mx-auto ">
            <div className="flex flex-col items-center py-10 text-center lg:py-20">
              <div className="w-full px-4 lg:w-1/2 lg:px-0">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-white">
                    Looking for a solution?
                  </h2>
                  <p className="text-lg lg:text-xl opacity-80">
                    Search the forum for the answer to your question
                  </p>
                </div>
                <label
                  className="mx-auto  relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                  for="search-bar"
                >
                  <input
                    onChange={handleName}
                    id="search-bar"
                    placeholder="search Doctor"
                    className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                  />
                  <button class="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                    <div class="relative">
                      <div class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                        <svg
                          className="opacity-0 animate-spin w-full h-full"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>

                      <div className="flex items-center transition-all opacity-1 valid:">
                        <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                          Search
                        </span>
                      </div>
                    </div>
                  </button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <DoctorList1 city={city} name={name} />
      </div>
      <div></div>
    </div>
  );
};

export default FindDoctor;
