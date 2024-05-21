const todoList = [{name:'',dueDate:''}]

renderTask()
//Rendering or displaying the list of tasks
function renderTask(){
    let todoListHTML = []

    for(let i = 0;i<todoList.length;i++){
        const todoObject = todoList[i]

        const {name, dueDate} = todoObject
        
        const html = `<p>${name}</p><p> ${dueDate} </p>
        <button onclick="
         todoList.splice(${i},1)
         renderTask()
        " class="delete-button">
        Delete
        </button>`
        todoListHTML += html
    }

    document.querySelector('.js-todoList').innerHTML = todoListHTML
}

//Adds a task to the array
function addToDo(){ 
    const inputElement = document.querySelector('.js-input-task') 
    const dateInput = document.querySelector('.js-dateInput')

    const name = inputElement.value
    const dueDate = dateInput.value 

    todoList.push({name,dueDate})//shorthand property
    inputElement.value = ''
    dateInput.value = ''  

    renderTask()
}

array = [1,2,3,4,5]
minMax()


/*function minMax(){
    let max = 0
    let min = array[0]
    for(let i=0;i < array.length;i++){
        if(array[i] < min){
            min = array[i]
        }
    }

    for(let i = 0;i < array.length;i++){
        if(array[i] > max){
            max = array[i]
        }
    }


    document.querySelector('.js-todoList').innerHTML = `<p>Max: ${max}, Min: ${min}</p>`
}*/