const mongoose = require("mongoose");
const Task = require("../model/ToDoTaskModel");

async function getTaskList(){
    const data = await Task.find({});
    let taskList = data.map((task)=>({
        taskName: task.task,
        completed: task.isCompleted,
        uid: task.createdAt,
    }))

    // console.log("TaskList:",taskList);
    
    return taskList
}

async function taskEdit(uid){
    const task = await Task.findOne({createdAt: uid})
    await Task.updateOne({createdAt: uid}, {isCompleted: !task.isCompleted}).then(()=>{
        console.log("scuccessfully updated");
    })
}

async function deleteTask(uid) {
    await Task.deleteOne({createdAt: uid}).then(()=>{
        console.log("Task Deleted ...");
    }
)
}
module.exports = {getTaskList, taskEdit, deleteTask};

