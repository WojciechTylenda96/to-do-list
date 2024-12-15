
const taskInputEl = document.getElementById("task-input");
const taskListEl = document.getElementById("task-list");
const deleteBtn = document.querySelectorAll(".delete-btn");
const checkBox = document.querySelectorAll("#checkbox");

// add new task

function addTask() {
    const input = taskInputEl.value;
    taskListEl.innerHTML += `
        <li><p>${input}</p> <button class="delete-btn">DELETE</button></li>
    `
    taskInputEl.value = "";
}

// delete task

taskListEl.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const listItem = event.target.parentElement;
        listItem.remove();
    }
});

// mark task as done

