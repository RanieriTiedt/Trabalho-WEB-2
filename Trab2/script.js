const senha = "moutinho"
let selecionado = 0;

function validarFormulario()
{
    validarNomeTarefa()
    validarDescricao()
    validarData()
    validarPrioridade()
    validarSenha()
}

function validarNomeTarefa()
{
    let nomeTarefa = document.getElementById("txtNomeTarefa").value
    if (nomeTarefa == "" || nomeTarefa.length <= 4)
    {
        alert("Nome da tarefa está vazia ou possui menos de 5 letras!")
        return false
    }
}

function validarDescricao()
{
    if (document.getElementById("txtDescricao").value == "")
    {
        alert("Descrição não pode ser vazia!")
        return false
    }
}

function validarData()
{
    if (document.getElementById("dateDataVencimento").value == "")
    {
        alert("Data não pode ser vazia!")
        return false
    }
}

function validarPrioridade()
{
    //Com certeza tem uma maneira mais fácil, mas tamo sem tempo.(isso foi digitado as 09:45)
    if (selecionado == 0)
    {
        alert("Prioridade não selecionada!")
        return false

    }
}

function validarSenha()
{
    if (document.getElementById("txtSenha").value != senha)
    {
        alert("Senha incorreta!")
        return false
    }
}