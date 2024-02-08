export default function scrollSuave() {
    const menuItens = document.querySelectorAll('.header-menu a[href^="#"]');
  
    menuItens.forEach(link => {
      link.addEventListener('click', scrollToClickId);
    });
  
    function scrollToHref(element) {
      const id = element.getAttribute('href');
      return document.querySelector(id).offsetTop;
    }
  
    function scrollToClickId(event) {
      event.preventDefault();
      const section = scrollToHref(this) - 30;
      scrollPosition(section);
    }
  
    function scrollPosition(section) {
      window.scrollTo({
        top: section,
        behavior: 'smooth'
      });
    }
  }
  