// import React from 'react'
import axios from "axios";
import { useState, BaseSyntheticEvent } from "react";
// import interface from 'interface';


export default function Home() {
  // interface TaskItem {
  //   taskName: string;
  //   completed: boolean;
  // }
  // const taskList: TaskItem[] = [
  // {
  //   taskName: "Learn Ftrontend",
  //   completed: true,
  // },
  // {
  //   taskName: "Learn Backend",
  //   completed: false,
  // },
  // {
  //   taskName: "Learn Database",
  //   completed: false,
  // },
  // {
  //   taskName: "Learn Authentication",
  //   completed: false,
  // },
  // {
  //   taskName: "Final integration",
  //   completed: false,
  // },
  // ];
  // export default function Home() {
 const [taskList, setTaskList] = useState([]);

  async function fetchTaskList() {
    const response = await axios("http://localhost:3000/tasklist");
    setTaskList(response.data.tasks);
    console.log(response.data.tasks);
  }

  async function addTask(event: BaseSyntheticEvent) {
    event.preventDefault();
    const task = event.target.task.value;

    const bodyFromData = new FormData();
    bodyFromData.append("task", task);

    await axios.post("http://localhost:3000/addtask", bodyFromData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    fetchTaskList();
  }

  async function deleteTask(uid: string) {
    try {
      const bodyFormData = new FormData();
      bodyFormData.append("uid", uid);
      await axios.post("http://localhost:3000/deletetask", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchTaskList();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }

  async function taskEdit(uid: string) {
 
    const bodyFormData = new FormData();
    bodyFormData.append("uid", uid);

    await axios.post("http://localhost:3000/taskComplete", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    fetchTaskList();
  }

  if (!taskList[0] && taskList[0] !== undefined) {
    console.log("task");
    fetchTaskList();
  }

  return (
    <div className="flex justify-start pt-40 items-center h-full flex-col gap-9 bg-gradient-to-t from-cyan-600 to-white-500 ">
      <div className="  w-4/5 flex justify-center items-center gap-9 ">
        <form
          onSubmit={addTask}
          method="post"
          encType="multipart/form-data"
          className="w-full justify-around flex px-50 gap-4">
          <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder=" Add the task "
            name="task"
            className="w-96 items-center  text-xl font-semibold  shadow-2xl rounded-xl border-2 border-cyan-700 h-9 text-left"
          />
          <button
            type="submit"
            className=" hover:border-sky-400 bg-cyan-700 px-5  rounded-3xl border-2 border-cyan-100  text-white font-semibold h-9 ">
            Add
          </button>
          </div>
        </form>
      </div>
      <div id="tasklist" className="  w-3/4  flex flex-col gap-4   ">
        {taskList.map((task, id) => (
          <Tasks
            key={id}
            task={task}
            taskEdit={taskEdit}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}
function Tasks({
  task,
  taskEdit,
  deleteTask,
}: {
  task: any;
  taskEdit: (uid: string) => Promise<void>;
  deleteTask: (uid: string) => Promise<void>;
}) {
  return (
    <div
      className={` flex gap-4 items-center will-change-auto h-12 border-b-2 border-black rounded-2xl justify-between px-5 ${
        task.completed ? "bg-green-200" : "bg-red-100"
      } `}>
        <div className="flex gap-4 items-center">
      <p>{task.completed ? "✔" : "❌"}</p>
      <p className=" font-semibold text-xl"> {task.taskName}</p>
        </div>
      <div>
      <button
        onClick={() => {
          deleteTask(task.uid);
        }}
        className="bg-cyan-700  w-29 px-3  border-2 rounded-3xl hover:border-sky-700 font-semibold text-gray-200">
        Delete
      </button>
      <button
        onClick={() => {
          taskEdit(task.uid);
        }}
        className=" w-45 px-5 py-0  border-2 rounded-3xl hover:border-sky-700 bg-cyan-700 font-semibold text-gray-200">
        Mark {task.completed ? "Uncomplete" : "Complete"}
      </button>
     
          </div>
      
    </div>
   

    
   
  );
}
