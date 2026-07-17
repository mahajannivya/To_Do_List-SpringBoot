const API = "http://localhost:8082/api/todos";

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
            <span class="${todo.completed ? "completed" : ""}">
                ${todo.task}
            </span>

            <div class="actions">
                <button class="complete-btn" onclick="completeTask(${todo.id})">✓</button>
                <button class="delete-btn" onclick="deleteTask(${todo.id})">🗑</button>
            </div>
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

async function deleteTask(id) {

			await fetch(`${API}/${id}`, {
				method: "DELETE"
			});

			loadTasks();

		}
