function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scroll({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  }
  
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
