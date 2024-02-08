import outsideClick from './outsideClick.js';

export default function menuMobile(){

    const btnMobile = document.querySelector('[data-menu="btn-mobile"]');
    const menuList = document.getElementById('header-menu-mobile');
    const eventos = ['click', 'touchstart'];
  
    
    if(btnMobile){
    
    function ativarHamburguer(event) {
      event.preventDefault();
      menuList.classList.add('ativarMenu');
      btnMobile.classList.add('ativarMenu');
      
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('ativarMenu');
        btnMobile.classList.remove('ativarMenu');
        })
    }

    eventos.forEach((evento) => {
      btnMobile.addEventListener(evento, ativarHamburguer);
  });
  
}

}