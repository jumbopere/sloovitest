import React from 'react'

const Tasks = () => {
  return (
    <div className="w-full max-w-md bg-white shadow-md rounded  mb-4 ">
          <div className="justify-between h-5 flex px-4  pt-3 pb-3 border-black">
            <h1 className="text-sm text-gray-500 uppercase ">Tasks {"  "} 0</h1>
            <button>+</button>
          </div>
<div className='flex justify-between mt-4 px-4 h-14'>
<div className='flex'>
   <img src="http://www.gravatar.com/avatar/8819dc24c18e9a4671a832c8254b8cc1?default=https%3A%2F%2Fs3.sloovi.com%2Favatar-default-icon.png" alt="icon" className='w-14' /> 
   <h1 className='text-gray-500 font-light text-md'>{"Task description"}</h1><br/>
   <h1 className='text-gray-500 font-light text-md'>{"Date"}</h1>
   
</div>
<div className='flex justify-between'>
<button >edit</button>
</div>
</div>
         
        </div>
  )
}

export default Tasks