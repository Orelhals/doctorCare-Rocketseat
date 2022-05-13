// Funções 
const callBack = () => {
    const nav = document.querySelector('.menu');
    const offSetTop = window.scrollY;
    const isActive = nav.classList.contains('active');

    if (offSetTop !== 0 && !isActive){
        nav.classList.add('active');
        return;
    } else if (offSetTop === 0 && isActive){
        nav.classList.remove('active');
        return;
    }
}

// Eventos 
window.addEventListener('scroll', callBack);


//function

const abrirMenu = () => {
    const openMenu = document.querySelector('body');
            openMenu.classList.toggle('menu-inactive');
            openMenu.classList.toggle('menu-active');
            return;
}

window.abrirMenu = abrirMenu;


// Animação aso Scroll 

// Eventos
window.addEventListener('scroll', animaScroll);

// Funções 

function animaScroll() {
    sections.forEach(section => {
        const topo = section.getBoundingClientRect().top;
        const isVisible = (topo - metadePage) < 0;
        if (isVisible) {
            section.classList.add('ativo')
        }

    });

}

// Variáveis 

const sections = document.querySelectorAll('.js-scroll');
const metadePage = window.innerHeight * 0.6;





