const primary_land = document.querySelector('.primary-land')
const second_land = document.querySelector('.second-land')
const third_land = document.querySelector('.third-land')
const fourth_land = document.querySelector('.fourth-land')
const gotop2 = document.querySelector('#gotop2')
const gotop3 = document.querySelector('#gotop3')
const gotop4 = document.querySelector('#gotop4')

gotop2.addEventListener('click', (e) => {
    e.preventDefault()

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

gotop3.addEventListener('click', (e) => {
    e.preventDefault()

    second_land.style.transform = "translateX(-100%)"
    second_land.style.opacity = "0"
    third_land.style.opacity = "1"
    third_land.style.pointerEvents = "all"
})

gotop4.addEventListener('click', (e) => {
    e.preventDefault()

    third_land.style.transform = "translateX(-100%)"
    third_land.style.opacity = "0"
    fourth_land.style.opacity = "1"
    fourth_land.style.pointerEvents = "all"
})

const pass = document.querySelector('#pass')
const r_pass = document.querySelector('#pass_r')
