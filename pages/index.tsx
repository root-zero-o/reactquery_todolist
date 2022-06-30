import React from 'react'

const index = () => {
  return (
    <div className="w-[600px] flex flex-col justify-center items-center rounded-lg border-indigo-300 border-8 bg-indigo-100">
      <h1 className="font-mono text-[30px] font-bold">To Do List</h1>
      <h2 className="font-mono">with React Query & tailwind CSS !</h2>
      <form className="w-[300px] flex flex-col justify-center items-center mt-5 p-5">
          <h3 className="font-mono">Write your plans</h3>
          <div className="flex mt-3">
            <input className="w-[200px] mr-3 p-2"/>
            <button className="w=[50px] rounded-lg bg-indigo-200 p-2 font-mono">submit</button>
          </div>
      </form>
      <div className="font-mono flex w-[400px] justify-between items-center">
        <h3 className="text-[20px]">1</h3>
        <h3>Study Javascript</h3>
        <button className="rounded-lg bg-indigo-200 p-2">Delete</button>
        <button className="rounded-lg bg-indigo-200 p-2">Edit</button>
      </div>
    </div>
  )
}

export default index;
