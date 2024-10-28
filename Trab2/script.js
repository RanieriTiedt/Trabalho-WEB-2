const senha = "moutinho"
const taskContainer = document.querySelector("#tasks")
const taskCounter = document.querySelector("#taskCounter")
const removeBtn = document.querySelector("#removeTask")
const tasks = []


function renderTasks() {
  let concat = ""
  tasks.forEach(o => concat += `<p> ${o} </p>`)

  taskContainer.innerHTML = concat
  taskCounter.innerHTML = `Quantidade de tarefas: ${tasks.length}`
}

function removeTask() {
  tasks.pop()
  renderTasks()
}

removeBtn.addEventListener('click', removeTask)

renderTasks()

function validarFormulario() {
  let nomeTarefa = document.getElementById("txtNomeTarefa").value
  if (nomeTarefa == "" || nomeTarefa.length <= 4) {
    alert("Nome da tarefa está vazia ou possui menos de 5 letras!")
    return false
  }

  if (document.getElementById("txtDescricao").value == "") {
    alert("Descrição não pode ser vazia!")
    return false
  }


  if (document.getElementById("dateDataVencimento").value == "") {
    alert("Data não pode ser vazia!")
    return false
  }


  let rbCounter = 0
  let rbList = document.getElementsByName("Prioridade")
  rbList.forEach(e => {
    if (e.checked == false) {
      rbCounter++
    }
  })
  if (rbCounter == 3) {
    alert("Uma prioridade deve ser selecionada!")
    return false
  }

  if (document.getElementById("txtSenha").value != senha) {
    alert("Senha incorreta!")
    return false
  }

  tasks.push(nomeTarefa)
  renderTasks()
  console.log("Ok");
}
