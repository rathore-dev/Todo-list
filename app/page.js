"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
      e.preventDefault()
      setMainTask([...mainTask, {title,desc}])
      setTitle(" ")
      setDesc('')
  }
   const deleteHandler =(i) =>{
    let copyTask =[...mainTask]
    copyTask.splice(i,1)``
    setMainTask(copyTask)
   }

  let renderTask = <h1>No Task Given</h1>


  if (mainTask.length >0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i} className="flex item-center justify-between mb-5">
        <div className="flex items-center justify-between mb-4 w-2/3">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-2xl font-semibold">{t.desc}</h6>
        </div>
        <button
        onClick={() =>{
          deleteHandler(i)
        }}
        className="bg-red-400 text-2xl text-white rounded font-bold">Delete</button>
        </li>
      );
    })
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-3xl font-bold text-center cursor-pointer">
        TODO LIST
      </h1>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Enter your task"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input
          placeholder="Enter your Description"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">
          Add task
        </button>
      </form>
      <hr/>
      
      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
};

export default page;
