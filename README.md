# Task Management CLI App

This interactive command-line application allows users to create, list, update, and delete tasks efficiently. It offers an intuitive menu system and is built with modular and reusable components.

## Features

- **Create Tasks**: Add new tasks with a unique description.
- **List Tasks**: View all tasks, including their status (completed or pending).
- **Filter Tasks**: Display only completed or pending tasks.
- **Update Task Status**: Mark tasks as completed or revert them to pending.
- **Delete Tasks**: Remove tasks from the list.
- **Persistent Data**: Task data is saved locally in a JSON file for persistence.

## Requirements

- Node.js installed on your machine.

## Install dependencies:

npm install

## Run the application:

node app

## Usage
1. Upon running the app, a menu will appear with the following options:

- 1. Crear Tarea: Add a new task by entering a description.
- 2. Listar Tareas: View all tasks with their current status.
- 3. Listar Tareas Completadas: Display only tasks marked as completed.
- 4. Listar Tareas Pendientes: Display only tasks that are not yet completed.
- 5. Completar Tarea(s): Select one or multiple tasks to mark as completed or pending.
- 6. Borrar Tarea: Remove a task from the list.
- 0. Salir: Close the application.

2. Follow the interactive prompts to manage your tasks.

## Dependencies

- colors: For styling console output.
- @inquirer/prompts: For creating interactive menus in the console.
- uuid: For generating unique IDs for tasks.