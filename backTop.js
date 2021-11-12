// back to top button




window.addEventListener('scroll',backToTop)
 
function backToTop(){
    const backToTopBtn = document.querySelector('.back-to-top-btn')
    const scrollheight = window.pageYOffset;
    if (scrollheight > 1000) {
        backToTopBtn.classList.add('show-back-to-top')
    }
    else{
        backToTopBtn.classList.remove('show-back-to-top')
    }
}
export default backToTop;