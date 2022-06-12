import React from "react";

const Form = () => {
  return (
    <div className="w-ful max-w-md bg-white shadow-md rounded  mb-4 ">
      <div className="justify-between h-5 flex px-4  pt-3 pb-3 border-black">
        <h1 className="text-sm text-gray-500 uppercase ">Tasks {"  "} 0</h1>
        <button >+</button>
      </div>

      <form

        className="bg-sky-300 mt-4 px-4  pt-3 pb-3"
      >
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-light mb-2">
            Task Description
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Follow up"
            />
          </label>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="mb-4 w-full md:w-1/2 px-3">
            <label className="block text-gray-500 text-sm font-light mb-2">
              Date
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                type="date"
              />
            </label>
          </div>
          <div className="mb-4 w-full  md:w-1/2  px-3">
            <label className="block text-gray-500 text-sm font-light mb-2">
              Time
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                type="time"
              />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-light mb-2">
            Assign User
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Follow up"
            />
          </label>
        </div>

        <div className=" justify-end flex ">
          <button className="text-gray-500 px-6 font-extralight bg-inherit">
            Cancel
          </button>
          <button className="text-white bg-green-500 px-6 font-extralight" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;