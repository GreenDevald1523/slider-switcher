// Функция для включения слайдера (первая строка прописывается всегда, во вторую нужно вписать название класса контейнера, в котором лежат прокручиваемые блоки)
$(document).ready(() => {
    $('.projects__items').slick({
        dots: true,
        fadeSpeed: 1000,
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: document.getElementById("arrow__left"),
        nextArrow: document.getElementById("arrow__right"),
    })
})

const contact = document.getElementById("contact")
const confirm = document.getElementById("confirm")

// Событие клика для появления модального окна после нажатия на кнопку
contact.addEventListener('click', (e) => {
    e.preventDefault()
    confirm.classList.remove('hide')
    setTimeout(() => {
        confirm.classList.add('hide')
    }, 2000)
})