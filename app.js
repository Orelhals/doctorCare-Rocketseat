// Funções 
const callBack = () => {
    const nav = document.querySelector('.menu-mobile');
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