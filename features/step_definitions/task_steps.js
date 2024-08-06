const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const TaskManager = require('../../src/taskManager');

let taskManager;

Given('no tengo tareas en mi lista', function () {
  taskManager = new TaskManager();
});

Given('tengo una tarea con el título {string} en mi lista', function (title) {
  taskManager = new TaskManager();
  taskManager.addTask(title);
});

When('agrego una tarea con el título {string}', function (title) {
  taskManager.addTask(title);
});

When('elimino la tarea con el título {string}', function (title) {
  taskManager.removeTask(title);
});

When('marco la tarea con el título {string} como completada', function (title) {
  taskManager.completeTask(title);
});

Then('debería tener {int} tarea en mi lista', function (taskCount) {
  assert.strictEqual(taskManager.getTasks().length, taskCount);
});

Then('la tarea con el título {string} debería estar marcada como completada', function (title) {
  const task = taskManager.getTasks().find(task => task.title === title);
  assert.strictEqual(task.completed, true);
});

Then('no debería tener ninguna tarea en mi lista', function () {
  assert.strictEqual(taskManager.getTasks().length, 0);
});
