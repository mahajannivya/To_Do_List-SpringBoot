const API = "http://localhost:8081/api/todos";

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const form = document.getElementById("todoForm");


window.onload = loadTasks;

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const task = taskInput.value.trim();

    if (task === "") return;

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            task: task,
            completed: false
        })
    });

    taskInput.value = "";

    loadTasks();
});