Feature: Gestionar tareas

  Scenario: Agregar una nueva tarea
    Given no tengo tareas en mi lista
    When agrego una tarea con el título "Comprar leche"
    Then debería tener 1 tarea en mi lista

  Scenario: Eliminar una tarea
    Given tengo una tarea con el título "Comprar leche" en mi lista
    When elimino la tarea con el título "Comprar leche"
    Then no debería tener ninguna tarea en mi lista