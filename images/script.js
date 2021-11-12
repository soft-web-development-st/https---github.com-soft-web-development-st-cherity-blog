let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;
const auto = false;
const intervalTime = 5000;
let slideInterval;

const counter = document.querySelectorAll('.campaign-counter');
const speed = 200;


// Clears all images
function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

// Initializes slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// left arrow click
arrowLeft.addEventListener('click', function(){
    if(current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// left arrow click
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();

});

startSlide();

// Auto Slide
if(auto) {
    slideInterval = setInterval(slideRight, intervalTime);
}


// Counters
counter.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        
        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 40);
        } else {
           count.innerText = target; 
        }
    }
    updateCount();
})