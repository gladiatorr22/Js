const todoInput = document.getElementById("todo-input")
const addTaskButton = document.getElementById("add-task-btn")
const todoList = document.getElementById("todo-list")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

tasks.forEach(task => rendertask(task));

addTaskButton.addEventListener('click',()=>{
  const taskText = todoInput.value.trim()
  if (taskText == "" ) return;

  const taskobj = {
    id : Date.now(),
    text : taskText,
    completed : false
  }
  tasks.push(taskobj)
  savetask()
  todoInput.value=""
  console.log(tasks);
})

function savetask(){
  localStorage.setItem("tasks" , JSON.stringify(tasks))
}

function rendertask(task){
 console.log(task);
 }