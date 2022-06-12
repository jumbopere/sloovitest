import React from "react";

import Form from "./components/Form";

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
        <Form />
      </div>
    </div>
  );
};

export default App;
