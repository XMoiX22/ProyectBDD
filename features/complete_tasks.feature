Feature: Completar tareas

  Scenario: Completar una tarea
    Given tengo una tarea con el título "Comprar leche" en mi lista
    When marco la tarea con el título "Comprar leche" como completada
    Then la tarea con el título "Comprar leche" debería estar marcada como completada