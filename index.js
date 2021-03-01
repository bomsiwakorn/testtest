let addTodo = () => {
    let input = document.getElementById('inputTodo').value
    let inputText = document.createTextNode(input)
    if (input === '') {
        alert('Invalid')
    } else {
        let list = document.createElement("li")
        list.appendChild(inputText)
        document.getElementById("todo").appendChild(list)
        document.getElementById('inputTodo').value = ''
    }
}

let clearTodo = () => {
    let allTodo = document.getElementById('todo')
    allTodo.innerHTML = ''

}