import Task from "./classes/Task.js";
import TaskManager from "./classes/TaskManager.js";

const taskManager = new TaskManager();
function showTask() {
  const comleted = document.getElementById("comleted");
  const active = document.getElementById("active");
  active.innerHTML = "";
  comleted.innerHTML = "";
  for (let task of taskManager.tasks) {
    if (task.status == false) {
      active.innerHTML += `
    <li class="list-group-item line2">${task.descripton}</li>
    <a onclick ="editTask(${task.id})" class="text-info">
    <i class="fa-regular fa-pen-to-square"></a></i>
    <a onclick="delteTask(${task.id})" class="text-danger">
    <i class="fa-solid fa-trash"></a></i>
    <a onclick="finshTask(${task.id})" class="text-success"><i class="fa-solid fa-check"></i></a>
    `;
    } else {
      comleted.innerHTML += `
    <li class="list-group-item line"">${task.descripton}</li>
    `;
    }
  }
}
window.creatTask = function () {
  let descripton = document.getElementById("floatingInput").value;
  let task = new Task(descripton);
  taskManager.addTask(task);
  showTask();
  document.getElementById("floatingInput").value = "";
};

window.delteTask = function (taskId) {
  if (confirm("Are You sure?")) {
    taskManager.deleteTast(taskId);
  }
  showTask();
};

window.editTask = function (taskId) {
  let newValue = prompt("change your task");
  if (newValue == null || newValue == "") {
    alert("dou'nt havh change");
  } else {
    taskManager.updateTaskDescription(taskId, newValue);
  }
  showTask();
};

window.finshTask = function (taskId) {
  if (confirm("Are you sure?")) {
    taskManager.completeTask(taskId);
  }

  showTask();
};

showTask();
