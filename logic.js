var task = document.querySelector(".list-group-item")
var submit = document.querySelector(".botao")
var i = 0;


submit.addEventListener('click', function (event) {
    event.preventDefault()

    var desc = document.querySelector("#insertDesc").value
    var date = document.querySelector("#insertDate").value
    saveLocStor(desc, date)
    console.log(localStorage.getItem('todo'))

})

function saveLocStor(Desc, Date) {
    var todo = localStorage.getItem('todo')
    var listar = {
        Date,
        Desc,
    }
    if (Desc && Date) {
        if (todo) {
            let todoObj = JSON.parse(todo)
            todoObj.push(listar)

            let todoString = JSON.stringify(todoObj)

            localStorage.setItem('todo', todoString);
        } else {
            let todoObj = [];
            todoObj.push(listar)

            let todoString = JSON.stringify(todoObj)
            localStorage.setItem('todo', todoString);
        }
        criarTask();
    } else {
        alert("UM DOS CAMPOS VAZIO")
    }
}

function criarTask() {
    let array = localStorage.getItem('todo')
    let listaDeAfazeres = JSON.parse(array)

    let listaSortida = listaDeAfazeres.sort(function(a,b){
        if(a.Date < b.Date){
            return -1
        }
        if(a.Date > b.Date){
            return 1
        }
        return 0
    })

    for(i = 0; i < listaSortida.length-1; i++){
        if(listaSortida[i].Date == listaSortida[i+1].Date){
            if(){
                
            }
        }
    }

    console.log(listaSortida)
}

task.addEventListener('click', function (event) {
    prompt("hello")
})