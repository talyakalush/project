export default class ActionsManager {
  constructor() {
    this.actions = localStorage.getItem("actions")
      ? JSON.parse(localStorage.getItem("actions"))
      : [];
    this.balance = 0;
    this.calcBalance();
  }
  addAction(action) {
    this.actions.push(action);
    this.calcBalance();
  }
  deleteAction(actionId) {
    let indexTodelete = this.actions.findIndex(
      (action) => action.id == actionId
    );
    this.actions.splice(indexTodelete, 1);
    this.calcBalance();
  }
  updateAction(actionId, newAmount) {
    let indexToUpdate = this.actions.findIndex(
      (action) => action.id == actionId
    );
    this.actions[indexToUpdate].amount =
      this.actions[indexToUpdate].type == "income" ? newAmount : -newAmount;
    this.calcBalance();
  }

  calcBalance() {
    this.balance = 0;
    for (let action of this.actions) {
      this.balance += action.amount;
    }
    document.getElementById("balance").innerText = ` Balance: ${this.balance}`;
  }
}
