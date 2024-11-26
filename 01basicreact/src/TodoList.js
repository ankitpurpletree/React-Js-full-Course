// import React, { useState } from "react";

// function TodoList() {
//   const [activity, setActivity] = useState("");

//   const [listData, setlistData] = useState([]);

//   function addActivity() {
//     // setlistData([...listData, activity]);
//     // console.log(listData);
//     setlistData((listData) => {
//       const updataList = [...listData, activity];
//       console.log(updataList);
//       setActivity("");
//       return updataList;
//     });
//   }

//   function removeActivity(i) {
//     const updatedListData = listData.filter((elem, id) => {
//       return i !== id;
//     });
//     setlistData(updatedListData);
//   }
// function removeAll(){
//     setlistData([])
// }

//   return (
//     <>
//       <div className='container'>
//         <div className='header'>TodoList</div>
//         <input
//           type='text'
//           placeholder='Add Activity'
//           value={activity}
//           onChange={(e) => setActivity(e.target.value)}
//         />
//         <button onClick={addActivity}>Add</button>
//         <p className='list-heading'>Here is your List:{")"}</p>
//         {listData !== [] &&
//           listData.map((data, i) => {
//             return (
//               <p key={i}>
//                 <div>{data}</div>
//                 <div>
//                   <button
//                     className='remove-button'
//                     onClick={() => removeActivity(i)}
//                   >
//                     remove(-)
//                   </button>
//                 </div>
//               </p>
//             );
//           })}
//           {listData.length>1 && }
//         <button onClick ={removeAll} className='remove-all-button'>remove All</button>
//       </div>
//     </>
//   );
// }

// export default TodoList;

import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./TodoList.css";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [tag, setTag] = useState("General");
  const [listData, setlistData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTag, setFilterTag] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  // Load and save tasks in local storage
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("todoList"));
    if (storedList) setlistData(storedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(listData));
  }, [listData]);

  function addActivity() {
    if (activity) {
      const newTask = {
        text: activity,
        priority,
        dueDate,
        tag,
        completed: false,
      };
      setlistData((listData) => [...listData, newTask]);
      setActivity("");
      setDueDate("");
      setPriority("Medium");
      setTag("General");
    }
  }

  function toggleComplete(index) {
    const updatedList = listData.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setlistData(updatedList);
  }

  function removeActivity(index) {
    const updatedListData = listData.filter((_, i) => i !== index);
    setlistData(updatedListData);
  }

  function removeAll() {
    setlistData([]);
  }

  function handleDragEnd(result) {
    if (!result.destination) return;
    const reorderedList = Array.from(listData);
    const [movedItem] = reorderedList.splice(result.source.index, 1);
    reorderedList.splice(result.destination.index, 0, movedItem);
    setlistData(reorderedList);
  }

  const filteredList = listData
    .filter((item) =>
      item.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => (filterTag === "All" ? true : item.tag === filterTag));

  return (
    <div className={`todo-container ${darkMode ? "dark-mode" : ""}`}>
      <div className='todo-header'>
        <h2>Advanced Todo List</h2>
        <button onClick={() => setDarkMode(!darkMode)} className='mode-toggle'>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className='input-container'>
        <input
          type='text'
          placeholder='Add a new task...'
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className='input-field'
        />
        <input
          type='date'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className='date-field'
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className='priority-select'
        >
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </select>
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className='tag-select'
        >
          <option value='Work'>Work</option>
          <option value='Personal'>Personal</option>
          <option value='Urgent'>Urgent</option>
          <option value='General'>General</option>
        </select>
        <button onClick={addActivity} className='add-button'>
          Add
        </button>
      </div>

      <div className='filter-container'>
        <input
          type='text'
          placeholder='Search tasks...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-field'
        />
        <select
          onChange={(e) => setFilterTag(e.target.value)}
          className='filter-select'
        >
          <option value='All'>All</option>
          <option value='Work'>Work</option>
          <option value='Personal'>Personal</option>
          <option value='Urgent'>Urgent</option>
          <option value='General'>General</option>
        </select>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='todoList'>
          {(provided) => (
            <div
              className='list-container'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredList.map((task, index) => (
                <Draggable
                  key={index}
                  draggableId={index.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className={`list-item ${
                        task.completed ? "completed" : ""
                      }`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <input
                        type='checkbox'
                        checked={task.completed}
                        onChange={() => toggleComplete(index)}
                        className='complete-checkbox'
                      />
                      <span
                        className={`priority ${task.priority.toLowerCase()}`}
                      >
                        {task.priority}
                      </span>
                      <span className='task-text'>{task.text}</span>
                      <span className='task-date'>{task.dueDate}</span>
                      <span className='task-tag'>{task.tag}</span>
                      <button
                        className='remove-button'
                        onClick={() => removeActivity(index)}
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {listData.length > 1 && (
        <button onClick={removeAll} className='remove-all-button'>
          Clear All
        </button>
      )}
    </div>
  );
}

export default TodoList;
