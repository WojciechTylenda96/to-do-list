
const taskInputEl = document.getElementById("task-input");
const taskListEl = document.getElementById("task-list");

function addTask() {
    const input = taskInputEl.value;
    taskListEl.innerHTML += `
        <li>${input} <button id="delete-btn">DELETE TASK</button></li>
    `
    taskInputEl.value = "";
}