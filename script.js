document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (scrollToTopButton) {
       scrollToTopButton.addEventListener('click', () => {
             window.scrollTo({
                 top: 0,
                 behavior: 'smooth'
             });
         });
     }
});