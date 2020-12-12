var submit = document.querySelector(".botao")
var i = 0;
var listaSortida = []
var variavel = ""

carregaLista();
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

    listaSortida = listaDeAfazeres.sort(function (a, b) {
        if (a.Date < b.Date) {
            return -1
        }
        if (a.Date > b.Date) {
            return 1
        }
        return 0
    })

}

function carregaLista() {
    let array = localStorage.getItem('todo')
    let listaDeAfazeres = JSON.parse(array)
    let collapse = document.querySelector("#colapsivel")

    if (listaDeAfazeres) {
        listaSortida = listaDeAfazeres.sort(function (a, b) {
            if (a.Date < b.Date) {
                return -1
            }
            if (a.Date > b.Date) {
                return 1
            }
            return 0
        })
        if (listaSortida) {
            collapse.innerHTML = ""

            var j = 0

            for (i = 0; i < listaSortida.length - 1; i++) {
                if (listaSortida[i].Date == listaSortida[i + 1].Date) {
                    if (j == 0) {
                        j = i
                    }
                    variavel += fillListCorpo(j, i)
                } else {
                    if (variavel) {
                        variavel += fillListCorpo(j, i)
                        collapse.innerHTML += montarfilllist(variavel, j)
                    } else {
                        collapse.innerHTML += fillList(i)
                    }
                    j = 0
                    variavel = ""
                }
            }
            collapse.innerHTML += fillList(i)
        }
    }
}

function fillListCorpo(J, I) {
    return `<div id="collapseOne${J}" class="collapse" aria-labelledby="headingOne"
                data-parent="#accordionExample">
                <div class="card-body">
                ${listaSortida[I].Desc}                
                 </div>
            </div>` ;

}

function montarfilllist(Variavel, J) {
    return `<div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button"
                            data-toggle="collapse" data-target="#collapseOne${J}" aria-expanded="true"
                            aria-controls="collapseOne">
                            Data: ${listaSortida[J].Date}
                        </button>
                    </h2>
                </div>
                    ${Variavel}
            </div>
       </div>` ;

}

function fillList(I) {
    return `<div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button"
                            data-toggle="collapse" data-target="#collapseOne${I}" aria-expanded="true"
                            aria-controls="collapseOne">
                            Data: ${listaSortida[I].Date}
                        </button>
                    </h2>
                </div>
            
                <div id="collapseOne${I}" class="collapse" aria-labelledby="headingOne"
                    data-parent="#accordionExample">
                    <div class="card-body">
                        ${listaSortida[I].Desc}
                        
                    </div>
                </div>
            </div>
       </div>` ;
}

