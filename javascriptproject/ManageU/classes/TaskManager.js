export default class TaskManager{
    constructor(){
    this.tasks =[]  
    }
    addTask(task){
    this.tasks.push(task);
    }
    deleteTast(taskId){
    let deletetask = this.tasks.findIndex((task) => task.id == taskId)
    this.tasks.splice(deletetask,1)
    }
    updateTaskDescription(taskId, newValue){
    let taskindex = this.tasks.findIndex((task) =>
     task.id == taskId)
    this.tasks[taskindex].descripton = newValue;   
    }
    completeTask(taskId){
    let teskcomlete = this.tasks.findIndex((task)=>
    task.id == taskId);
    this.tasks[teskcomlete].status = true;

    }

}