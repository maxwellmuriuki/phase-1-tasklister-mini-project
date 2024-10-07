
// we are creating a custom response to our event that is "create task form"
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
 
  //we add a preventdefault to prevent  sdefault behavior
  taskForm.addEventListener("submit", function (event) {
   event.preventDefault();
 
   //we are addding an element of color so that  what aapeaer in our todo list has defrent  colors of your choise .
   const color = document.getElementById("select-colour").value;
   const taskDescription = document.getElementById("new-task-description").value;
   if (taskDescription.trim() !== ""){
     addTaskToList(taskDescription, color);
     taskForm.reset();
   }
  });
 });
 // you wwill be able to choose a color of ur chioce   that you want your   test to appear in .
 function addTaskToList(task, color) {
   const taskList = document.getElementById("tasks");
   const newTask = document.createElement("li");
   newTask.textContent = task;
   newTask.style.color = color;
 
   // a delete botton will be added beside the  to do list  if u want your  delete  a statement inside your todo list.
   const deleteButton = document.createElement("button")
   deleteButton.textContent = "Delete";
   deleteButton.addEventListener("click", () => {
     newTask.remove();
   });
 
   newTask.appendChild(deleteButton);
   taskList.appendChild(newTask,);
 }
