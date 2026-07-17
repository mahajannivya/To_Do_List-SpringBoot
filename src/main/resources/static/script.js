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

async function loadTasks() {

    const response = await fetch(API);

    const tasks = await response.json();

    taskList.innerHTML = "";

    tasks.forEach(todo => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span ${todo.completed ? 'style="text-decoration:line-through;"' : ""}>
                ${todo.task}
            </span>

            <button onclick="completeTask(${todo.id})">
                Complete
            </button>

            <button onclick="deleteTask(${todo.id})">
                Delete
            </button>
        `;

        taskList.appendChild(li);

    });

}
async function completeTask(id) {

			await fetch(`${API}/${id}`, {
				method: "PUT"
			});

			loadTasks();

		}


