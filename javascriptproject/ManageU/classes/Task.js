export default class Task{
    constructor(descripton){
    this.id = Math.floor(Math.random() *1000);
    this.descripton = descripton;
    this.status = false;
    }

}