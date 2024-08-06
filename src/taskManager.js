class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(title) {
      this.tasks.push({ title, completed: false });
    }
  
    removeTask(title) {
      this.tasks = this.tasks.filter(task => task.title !== title);
    }
  
    completeTask(title) {
      const task = this.tasks.find(task => task.title === title);
      if (task) {
        task.completed = true;
      }
    }
  
    getTasks() {
      return this.tasks;
    }
  }
  
  module.exports = TaskManager;
  