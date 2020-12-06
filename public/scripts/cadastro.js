const primary_land = document.querySelector('.primary-land')
const second_land = document.querySelector('.second-land')
const gotop2 = document.querySelector('#gotop2')
const send = document.querySelector('form')

// $.ajax({
//     url: "https://www.receitaws.com.br/v1/cnpj/04918341000100",
//     type: "GET",
//     crossDomain: true,
//     dataType: "jsonp",
//     success: (data) => {console.log(data)}
// })

gotop2.addEventListener('click', () => {

    // VALIDAÇÃO DO FORMULARIO
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const cpf = document.querySelector('#cpf')

    if (name.value.length < 10) {
        document.querySelector('#name-alert').innerText = 'Este campo é obrigatório'
    } else if (email.value.length < 10) {
        document.querySelector('#mail-alert').innerText = 'Este campo é obrigatório'
    } else if (cpf.value.length < 14) {
        document.querySelector('#cpf-alert').innerText = 'Este campo é obrigatório'
    } else {

        primary_land.style.transform = "translateX(-100%)"
        primary_land.style.opacity = "0"
        second_land.style.opacity = "1"
        second_land.style.pointerEvents = "all"

        document.querySelector('.second-land span').innerText = document.querySelector('#name').value
    }
})

send.addEventListener('submit', (e) => {

    const pass = document.querySelector('#pass')
    const r_pass = document.querySelector('#pass_r')

    if (pass.value !== r_pass.value) {
        document.querySelector('#pass_alert').innerText = 'As senhas não coincidem'
        e.preventDefault()
    } 
    
    if (pass.value.length < 8) {
        document.querySelector('#pass_alert').innerText = 'A senha deve conter pelo menos 8 caracteres'
        e.preventDefault()
    }
})