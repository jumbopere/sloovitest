import React from 'react'

const Login = () => {
  return (
    <div className="w-ful max-w-md bg-white shadow-md rounded  mb-4 ">
    <div className="justify-center h-5 flex px-4  pt-3 pb-3 border-black">
      <h1 className="text-sm text-gray-500 uppercase "> Login</h1>
  
    </div>

    <form
onSubmit={{}}
      className="bg-sky-300 mt-4 px-4  pt-3 pb-3"
    >
      <div className="mb-4">
        <label className="block text-gray-500 text-sm font-light mb-2">
          Email
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter your Email"
            required
          />
        </label>
      </div>
     
      <div className="mb-4">
        <label className="block text-gray-500 text-sm font-light mb-2">
         Password
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Enter your password"
          />
        </label>
      </div>

      <div className=" justify-end flex ">
       
        <button className="text-white bg-green-500 px-6 font-extralight" type="submit">
          Login
        </button>
      </div>
    </form>
  </div>
  )
}

export default Login