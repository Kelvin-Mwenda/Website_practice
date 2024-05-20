const todoList = []
let todoListHTML = []

//Rendering or displaying the list of tasks
function renderTask(){
    
    for(let i = 0;i<todoList.length;i++){
        const todo = todoList[i]
        const html = `<p>${todo}</p>`
        todoListHTML += html
    }

    document.querySelector('.js-todoList').innerHTML = todoListHTML
    todoListHTML = []
}

//Adds a task to the array
function addToDo(){ 
    const inputElement = document.querySelector('.js-input-task') 

    const name = inputElement.value
    todoList.push(name)
    inputElement.value = ''  
    renderTask()
}