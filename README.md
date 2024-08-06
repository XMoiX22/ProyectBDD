# BDD

Este es un proyecto de ejemplo que demuestra cómo utilizar Behavior Driven Development (BDD) para desarrollar un sistema básico de gestión de tareas.

## Tabla de Contenidos

- [Introducción](#introducción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Introducción

Este proyecto utiliza Cucumber.js para implementar BDD en un sistema de gestión de tareas. BDD es una metodología ágil de desarrollo de software que fomenta la colaboración entre desarrolladores, QA y stakeholders.

## Características

- Agregar nuevas tareas
- Eliminar tareas
- Marcar tareas como completadas
- Verificar el comportamiento esperado mediante pruebas automatizadas

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local.

1. Clona el repositorio:

   ```bash
   git clone https://github.com/XMoiX22/ProyectBDD
   cd (Entrar en el proytecto).
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

Para ejecutar las pruebas BDD, usa el siguiente comando:

```bash
npm test
```

Esto ejecutará todos los escenarios definidos en los archivos `.feature` y mostrará los resultados en la terminal.

## Estructura del Proyecto

```plaintext
task-manager/
├── features/
│   ├── step_definitions/
│   │   ├── task_steps.js
│   ├── support/
│   │   ├── hooks.js
│   ├── manage_tasks.feature
│   └── complete_tasks.feature
├── src/
│   ├── taskManager.js
├── package.json
├── package-lock.json
```

- **features/**: Contiene los archivos `.feature` que describen los escenarios de BDD y las definiciones de pasos en JavaScript.
- **src/**: Contiene la lógica de la aplicación, en este caso, el gestor de tareas.
- **package.json**: Archivo de configuración para npm.

```

Este `README.md` proporciona una descripción clara del proyecto, instrucciones de instalación y uso. Puedes personalizarlo según tus necesidades específicas.
