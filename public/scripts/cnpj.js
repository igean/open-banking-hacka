const gotop4 = document.querySelector('#gotop4')
const third_land = document.querySelector('.third-land')
const fourth_land = document.querySelector('.fourth-land')

gotop4.addEventListener('click', (e) => {
    e.preventDefault()
    third_land.style.transform = "translateX(-100%)"
    third_land.style.opacity = "0"
    fourth_land.style.opacity = "1"
    fourth_land.style.pointerEvents = "all"
})