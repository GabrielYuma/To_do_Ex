var task = document.querySelector(".list-group-item")
var submit = document.querySelector(".botao")


submit.addEventListener('click', function (event) {
    event.preventDefault()
    
    var desc = document.querySelector("#insertDesc").value
    var date = document.querySelector("#insertDate").value
    saveLocStor(desc, date)
    var i = 1
    console.log(localStorage.getItem('todo'))

})

function saveLocStor(Desc, Date) {
    var todo = localStorage.getItem('todo')
    var listar = {
        Date,
        Desc,
    }
    if (Desc && Date){
        if (todo) {
        let todoObj = JSON.parse(todo)
            todoObj.push(listar)

            let todoString = JSON.stringify(todoObj)
            
            localStorage.setItem('todo', todoString);
        }else{
            let todoObj = [];
            todoObj.push(listar)

            let todoString = JSON.stringify(todoObj)
            localStorage.setItem('todo', todoString);
        }
    }else{
        alert("UM DOS CAMPOS VAZIO")
    }
    

}


task.addEventListener('click', function (event) {
    prompt("hello")
})