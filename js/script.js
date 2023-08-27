//  aqui eu criei para a palavra "website" do sobre ficar escrevendo sozinho
var typingeffect = new Typed(".digitando", {
        strings: ["REALIDADE DIGITAL."],
        loop: true,
        typeSpeed: 150,
        backSpeed: 100,
        backDelay: 1500,
});

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
