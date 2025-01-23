const bodyParser = require('body-parser');
const Express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const Task = require('../backend/model/ToDoTaskModel');
require('dotenv').config();
// const { getTaskList , taskEdit ,deleteTask} = require("./handlers/functions")

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
const app = Express();
const port = 3000;
// middleware to allow cross-origin requests
app.use(function (req, res, next) { res.header('Access-Control-Allow-Origin', '*'); next(); });
app.use(bodyParser.json());
const upload = multer();
// router to get the list of tasks

app.get("/tasklist", async (req, res) => {

  const data = await Task.find({})
  const tasklist = data.map((task) => ({ 
    taskName: task.task,
    completed: task.isCompleted,
    uid: task._id

  }))
  // console.log('tasklist', tasklist);
  res.send({tasks: tasklist});


  // res.send({
  //   tasks: [

  //     {
  //       taskName: "Learn Frontend",
  //       completed: true,
  //     },
  //     {
  //       taskName: "Learn Backend",
  //       completed: false,
  //     },
  //     {
  //       taskName: "Learn Database",
  //       completed: false,
  //     },
  //     {
  //       taskName: "Learn Authentication",
  //       completed: false,
  //     },
  //     {
  //       taskName: "Final integration",
  //       completed: false,
  //     },
  //   ],
  // });
});

// router to add  a new task
app.post("/addtask", upload.none(), (req, res) => {

  const task = req.body.task;
  console.log('task', task);
  
  if(!task || task.trim() === '') {
    res.send('task name is required');
    return;
  }

  const todoTask = new Task({
    task: task,
    isCompleted: false ,
    createdAt: new Date()
  });
  todoTask.save().then(() => {
    console.log('task saved');
    

  })
  res.send('task added');
});


app.post("/taskComplete", upload.none(), async(req, res) => {
  const uid = req.body.uid;
  const prevTask = await Task.findById(uid);
  await Task.findByIdAndUpdate(uid, {isCompleted: !prevTask.isCompleted }).then(() => {
    res.send({message: "task completed"});
  }) 
  .catch(err => {
    res.send({message: "error"})
  })
})


//  route to delete a task

app.post("/deletetask", upload.none(), async(req, res) => {
  const uid = req.body.uid; 
  await Task.findByIdAndDelete(uid).then(() => {
    res.send({message: "task deleted"});
  })  
})

 

// start the server
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
});  