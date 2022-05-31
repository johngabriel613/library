var header = document.querySelector('header')


window.addEventListener('scroll', () => {
    if(scrollY > 0){
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
})


//Navigation
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const nav = document.querySelector('nav')

openMenu.addEventListener('click', () => {
    nav.classList.add('opened')
})

closeMenu.addEventListener('click', () => {
    nav.classList.remove('opened')
})

