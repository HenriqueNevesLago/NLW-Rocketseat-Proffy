//Procurar o botão 
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//Quando clicar no botão

//Execultar uma acao
function cloneField() {
    //dublicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    const fields = newFieldContainer.querySelectorAll("input")
    //para cada campo limpar
    fields.forEach(function(field) {
        field.value = " "
    })
    //colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer)

}
    