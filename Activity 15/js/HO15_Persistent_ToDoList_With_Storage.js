const taskContainer = document.getElementById("tasks-container");
const createTask = document.getElementById("create-task-button");

const newTaskContainer = document.createElement("div");
const newTask = document.createElement("input");
const buttonContainer = document.createElement("div");
const addTask = document.createElement("button");
const cancelTask = document.createElement("button");

if (localStorage.length == 0) {
  localStorage.setItem("tasks", JSON.stringify({}));
} else {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  
  for (let task in tasks) {
    const taskToAddContainer = document.createElement("li");
    const taskToAdd = document.createElement("span");
    const buttonContainer = document.createElement("div");
    const toggleDone = document.createElement("button");
    const deleteTask = document.createElement("button");
    const divider = document.createElement("hr");

    taskToAdd.textContent = task;

    toggleDone.setAttribute("class", "To-Do");
    toggleDone.textContent = "Done";
    toggleDone.setAttribute("onclick", "toggleTask(this)");
    if(tasks[task] == "done") {
      taskToAdd.toggleAttribute("done");
      toggleDone.toggleAttribute("mark");
      toggleDone.textContent = "Undo";
    }

    deleteTask.setAttribute("class", "delete");
    deleteTask.textContent = "Delete";
    deleteTask.setAttribute("onclick", "removeTask(this)");

    taskToAddContainer.appendChild(taskToAdd);
    buttonContainer.appendChild(toggleDone);
    buttonContainer.appendChild(deleteTask);

    taskToAddContainer.appendChild(buttonContainer);

    taskContainer.appendChild(taskToAddContainer);
    taskContainer.append(divider);
  }
}

newTask.type = "text";
newTask.name = "new-task";
newTask.id = "new-task";
newTask.required = "true";

addTask.setAttribute("class", "add-task-button");
addTask.textContent = "Add task";

cancelTask.setAttribute("class", "cancel-task-button");
cancelTask.textContent = "Cancel";

createTask.addEventListener("click", () => {
  newTaskContainer.appendChild(newTask);
  buttonContainer.appendChild(addTask);
  buttonContainer.appendChild(cancelTask);
  newTaskContainer.appendChild(buttonContainer);

  taskContainer.appendChild(newTaskContainer);

  createTask.toggleAttribute("disabled");
});

cancelTask.addEventListener("click", () => {
  newTaskContainer.remove();
  createTask.toggleAttribute("disabled");
});

addTask.addEventListener("click", () => {
  if (!newTask.checkValidity()) {
    alert("Field required.");
    return;
  };

  let task = newTask.value;

  const taskToAddContainer = document.createElement("li");
  const taskToAdd = document.createElement("span");
  const buttonContainer = document.createElement("div");
  const toggleDone = document.createElement("button");
  const deleteTask = document.createElement("button");
  const divider = document.createElement("hr");

  taskToAdd.textContent = task;

  toggleDone.setAttribute("class", "To-Do");
  toggleDone.textContent = "Done";
  toggleDone.setAttribute("onclick", "toggleTask(this)");

  deleteTask.setAttribute("class", "delete");
  deleteTask.textContent = "Delete";
  deleteTask.setAttribute("onclick", "removeTask(this)");

  taskToAddContainer.appendChild(taskToAdd);
  buttonContainer.appendChild(toggleDone);
  buttonContainer.appendChild(deleteTask);

  taskToAddContainer.appendChild(buttonContainer);

  taskContainer.appendChild(taskToAddContainer);
  taskContainer.append(divider);

  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks[task] = "pending";
  localStorage.setItem("tasks", JSON.stringify(tasks));

  newTaskContainer.remove();
  createTask.toggleAttribute("disabled");
});

function toggleTask(elem) {
  let parent = elem.parentElement.parentElement;
  let task = parent.firstChild;
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let status = tasks[task.textContent];
  
  status == "pending" ?
    tasks[task.textContent] = "done"
    : tasks[task.textContent] = "pending";

  localStorage.setItem("tasks", JSON.stringify(tasks));

  task.toggleAttribute("done");
  elem.toggleAttribute("mark");

  elem.textContent == "Done" ? 
    elem.textContent = "Undo" 
    : elem.textContent = "Done";
}

function removeTask(elem) {
  let parent = elem.parentElement.parentElement;
  let hr = parent.nextSibling;
  let span = parent.firstChild;

  let tasks = JSON.parse(localStorage.getItem("tasks"));
  delete tasks[span.textContent];
  localStorage.setItem("tasks", JSON.stringify(tasks));

  parent.remove();
  hr.remove();
}