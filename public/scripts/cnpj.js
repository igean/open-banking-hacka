const gotop4 = document.querySelector('#gotop4')
const third_land = document.querySelector('.third-land')
const fourth_land = document.querySelector('.fourth-land')

gotop4.addEventListener('click', (e) => {
    e.preventDefault()
    third_land.style.transform = "translateX(-100%)"
    third_land.style.opacity = "0"
    fourth_land.style.opacity = "1"
    fourth_land.style.pointerEvents = "all"

    const cnpj = document.querySelector('#cnpj').value

    $.ajax({
        url: 'https://www.receitaws.com.br/v1/cnpj/' + cnpj,
        type: "GET",
        crossDomain: true,
        dataType: "jsonp",
        success: (data) => {
            document.querySelector('#cnpj-nome').innerText = data.nome
            document.querySelector('#cnpj_n').innerText = data.cnpj
            document.querySelector('#cnpj-atividade').innerText = data.atividade_principal[0].text
            document.querySelector('#cnpj-tel').innerText = data.telefone
        }
    })

})