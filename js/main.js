function showInfo() {
    window.event.preventDefault()
    let birthDate = document.querySelector('#birth-date')

    let birth = birthDate.value

    console.log(name, birth)
}


// document.querySelector('.js-form button').addEventListener('click', showInfo)
// REALIZANDO TESTES DE VALIDAÇÃO


document.querySelector('input[type=text]').oninvalid = function show() {
    let name = document.querySelector('.js-field-name').value

    // remove mensagens de erro antigas
    this.setCustomValidity("");
  
    // reexecuta validação
    if (!this.validity.valid) {
        if (name.length < 3) {
            this.setCustomValidity("No minimo 3 caracteres"); // se inválido, coloca mensagem de erro
        }
    }

    
  };

  document.querySelector('.js-form button').addEventListener('click', show())