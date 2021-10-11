//dichiaro elementi
const openIcon = document.querySelector ('.header-right > a');
const menu = document.querySelector ( '.hamburger-menu');
const closeIcon = document.querySelector ('.close');

//per aprire aggiungo la classe active al hamburger-menu
openIcon.addEventListener ('click', function(){
    menu.classList.add('active');
});

//per chiudere rimuvo classe active al hamburger-menu
closeIcon.addEventListener ('click', function(){
    menu.classList.remove('active');
});