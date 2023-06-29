const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

//mimicing a database by an array
let todoList = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//getting all the todos
app.get("/todos", (req, res) => {
  return res.status(200).json({
    data: todoList,
    success: true,
  });
});

let id = 0;

//posting a todo
app.post("/todos", (req, res) => {
  todoList.push({
    title: req.body.title,
    content: req.body.content,
    id: ++id,
  });

  return res.status(201).json({
    success: true,
  });
});

//getting one specific todo
app.get("/todos/:id", (req, res) => {
  //console.log(req.params.id);
  let result = todoList.filter((todo) => todo.id == req.params.id);
  //console.log(result);
  return res.status(200).json({
    data: result,
    success: true,
  });
});

//deleting a todo
app.delete("/todos/:id", (req, res) => {
  let todoToDelete = parseInt(req.params.id);
  let index = todoList.findIndex((element) => element.id === todoToDelete);
  if (index !== -1) {
    todoList.splice(index, 1); // Removes one element at the specified index
  }

  return res.status(200).json({
    data: todoList,
    success: true,
  });
});

app.listen(PORT, () => {
  console.log("Server started at ", PORT);
});
