import Action from "./class/Action.js";
import ActionsManager from "./class/ActionsManager.js";

let salary = new Action("income", "November salary", 10000);
console.log(salary);

let supermarket = new Action("expense", "Supermarket", 600);
console.log(supermarket);

window.addActionToManager = function () {
  let type = document.getElementById("type").value;
  let description = document.getElementById("description").value;
  let amount = +document.getElementById("amount").value;

  let action = new Action(type, description, amount);

  mansger.addAction(action);

  showActionsInTable();

  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
};
window.deleteActionFromManager = function (actionId) {
  if (confirm("Are you sure?")) {
    mansger.deleteAction(actionId);

    showActionsInTable();
  }
};
window.addite = function (actionId) {
  let anser = prompt("Plese Enter new amount", "");
  if (anser == null || anser == "") alert("Something went wrong");
  else {
    mansger.updateAction(actionId, +anser);
    showActionsInTable();
  }
};

function showActionsInTable() {
  document.getElementById("actions").innerHTML = "";
  localStorage.setItem("actions", JSON.stringify(mansger.actions));
  for (let action of mansger.actions) {
    document.getElementById("actions").innerHTML += `<tr ><td >${
      action.description
    }</td><td> ${action.amount} </td><td  class= ${
      action.type == "income" ? "text-success" : "text-danger"
    }><a onclick =addite(${action.id})>
    <i class="fa-regular fa-pen-to-square"></a></i></td><td class= ${
      action.type == "income" ? "text-success" : "text-danger"
    }><a onclick=deleteActionFromManager(${action.id})>
    <i class="fa-solid fa-trash"></a></i></td>
    </tr>`;
  }
}

let mansger = new ActionsManager();

showActionsInTable();
