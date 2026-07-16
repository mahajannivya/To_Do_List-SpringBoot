const API = "http://localhost:8081/api/todos";

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const form = document.getElementById("todoForm");


window.onload = loadTasks;