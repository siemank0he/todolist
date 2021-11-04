const addTaskButton = document.querySelector(".addTask");
const taskTitle = document.querySelector(".taskText");
const taskType = document.querySelector(".taskInput input");
const taskBox = document.querySelector(".task");
const taskDeleteBtn = document.querySelector(".taskDelete");
const mainSection = document.querySelector(".main");

const taskArr = [];

const addTaskFun = () => {
    const inputValue = taskType.value;
    if(inputValue == ""){
        taskType.style.border = "4px solid red";
        taskType.placeholder = "You didn't enter any task! :(";
    } else {
        taskArr.push(inputValue);
        taskType.value = "";
        taskType.style.border = "0";
        taskType.placeholder = "add a task";
        renderTask();
    }
    
}

const renderTask = () => {
    const task = document.createElement("div");
    const taskText = document.createElement("span");
    const deleteBtn = document.createElement("span");
    task.classList.add("task");
    taskText.classList.add("taskText");
    deleteBtn.classList.add("taskDelete");
    task.appendChild(taskText);
    task.appendChild(deleteBtn);
    mainSection.appendChild(task);
}

addTaskButton.addEventListener("click", addTaskFun);