Feature: Gestionar tareas
  Scenario: Agregar una nueva tarea
    Given no tengo tareas en mi lista
    When agrego una tarea con el título "Comprar leche"
    Then debería tener 1 tarea en mi lista