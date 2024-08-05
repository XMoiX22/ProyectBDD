const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let taskList = [];

Given('no tengo tareas en mi lista', function () {
  taskList = [];
});

When('agrego una tarea con el título {string}', function (title) {
  taskList.push({ title });
});

Then('debería tener {int} tarea en mi lista', function (taskCount) {
  assert.strictEqual(taskList.length, taskCount);
});