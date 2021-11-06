const taskArr = [];

const addTaskButton = document.querySelector(".addTask");
const taskTitle = document.querySelector(".taskText");
const taskType = document.querySelector(".taskInput input");
const taskBox = document.querySelector(".task");
const mainSection = document.querySelector(".tasks");

const deleteTaskByKey = (e) => {
    const index = e.target.parentNode.dataset.key;
    console.log(index);
    taskArr.splice(index, 1);
    renderTasks();
}

const addTaskFun = () => {
    const inputValue = taskType.value;
    if(inputValue == ""){
        taskType.style.border = "4px solid red";
        taskType.placeholder = "You didn't enter any task! :(";
    } else {
        taskType.value = "";
        taskType.style.border = "0";
        taskType.placeholder = "add a task";
        createTask(inputValue);
        renderTasks();
    }
    
}

const createTask = (inputValue) => {
    const task = document.createElement("div");
    const taskText = document.createElement("span");
    const deleteBtn = document.createElement("span");
    task.classList.add("task");
    taskText.classList.add("taskText");
    deleteBtn.classList.add("taskDelete");
    task.appendChild(taskText);
    task.appendChild(deleteBtn);
    taskText.textContent = inputValue;
    taskArr.push(task);
    task.querySelector(".task .taskDelete").addEventListener("click", deleteTaskByKey);
}

const renderTasks = () => {
    mainSection.textContent = "";
    taskArr.forEach((item, key) => {
        item.dataset.key = key;
        mainSection.appendChild(item);
    })
}

addTaskButton.addEventListener("click", addTaskFun);
