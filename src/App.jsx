import React from "react";

import Form from "./features/Form";
import Tasks from "./features/Tasks";

const App = () => {
  return (
    <div>
      <div className=" fixed bg-gray-700 h-screen w-52"></div>

      <div
        className="
            bg-white w-full h-12 shadow-white"
      >
        jikoidod
      </div>
      <div className="m-5 justify-center flex">
        <Tasks/>
      </div>
    </div>
  );
};

export default App;
