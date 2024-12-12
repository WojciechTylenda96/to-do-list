
const taskInputEl = document.getElementById("task-input");
const taskListEl = document.getElementById("task-list");
const deleteBtn = document.querySelectorAll(".delete-btn")


function addTask() {
    const input = taskInputEl.value;
    taskListEl.innerHTML += `
        <li>${input} <button class="delete-btn">DELETE TASK</button></li>
    `
    taskInputEl.value = "";
}

taskListEl.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const listItem = event.target.parentElement;
        listItem.remove();
    }
});