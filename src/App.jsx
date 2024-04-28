import React, { useState } from "react";

function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [maintask, setmaintasks] = useState([]);

  const handleChange = (e) => {
    settitle(e.target.value);
  };

  const handleChanges = (e) => {
    setdesc(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    setmaintasks([...maintask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(maintask);
  };

  const handleRemove = (index) => {
    let copytask = [...maintask];
    copytask.splice(index, 1);
    setmaintasks(copytask);
  };

  let rendertask = <h2>No Task Here...</h2>;

  if (maintask.length > 0) {
    rendertask = maintask.map(function (t, index) {
      return (
        <li key={index}>
          <div key={index} className="flex justify-between">
            <h5>{t.title}</h5>
            <h6>{t.desc}</h6>

            <button
              className="bg-red-800 text-white px-4 py-2 rounded mt-1"
              onClick={() => handleRemove(index)}
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-center mb-4 mt-8 bg-black text-yellow-400 w-102 px-5 rounded  shadow  py-1 shadow-yellow-500">
          My ToDo List using ReactJs :){" "}
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
          <form action="" className="m-5" onSubmit={SubmitHandler}>
            <input
              type="text"
              className="bg-slate-800 text-white px-4 py-2 font-bold rounded w-full mb-4 md:mb-1 md:w-1/2 lg:w-full"
              placeholder="Enter text Here?"
              value={title}
              onChange={handleChange}
            />
            <input
              type="text"
              className="bg-slate-800 text-white px-4 py-2 font-bold rounded w-full mb-4 md:mb-1 md:w-1/2 lg:w-full"
              placeholder="Enter Description Here?"
              value={desc}
              onChange={handleChanges}
            />

            <button className="bg-black text-white px-5 py-2 font-bold rounded w-full">
              Add Task
            </button>
          </form>

          <div className="  bg-slate-800 text-white px-4 py-2 font-bold rounded w-full mb-4 md:mb-1 md:w-1/2 lg:w-full">
            <ul> {rendertask}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
