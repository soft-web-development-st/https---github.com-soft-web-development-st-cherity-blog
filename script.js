
import backToTop from "./backTop.js";

function getElement(selection){
    const element = document.querySelector(selection)
    if (element) {
        return element
    }
    throw new Error(
        `Please check "${selection}" selector, no such element exits`
    )
}

 

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#arrow-right');
const prevBtn = document.querySelector('#arrow-left');

const run = true;
const intervalTime = 8000;
let slideInterval;


const nextSlide = () =>{

    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active')

    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('active')
    }else{
        slides[0].classList.add('active')
    }
    setTimeout(() => activeSlide.classList.remove('active'))

}
const prevSlide = () =>{

    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active')

    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add('active')
    }else{
        slides[slides.length - 1 ].classList.add('active')
    }
    setTimeout(() => activeSlide.classList.remove('active'))
 
    
}

nextBtn.addEventListener('click', function(){
    nextSlide()
   
})
prevBtn.addEventListener('click', function(){
    prevSlide()
     
})

if(run){
     setInterval(nextSlide,intervalTime)
}

// text animation

// const text = document.querySelector('.content1');



const progressValue3  = document.querySelector('.counter-three')
const progressValue2  = document.querySelector('.counter-two')
const  pValue  = document.querySelector('.counter-one')
const progressBar = document.querySelector('.outer')
const progressBar2 = document.querySelector('.outer1')
const progressBar3 = document.querySelector('.outer2')

const container = document.querySelector('.latest-campaigns-cards')
 let bol = false;

window.addEventListener('scroll', function(){
    if(pageYOffset > container.offsetTop - 600 && bol ===false){ 

  let value = 0;
  let endValue = 50;
  let speed = 45;

function progress(){

    let progress = setInterval(() => {
        value ++
        pValue.textContent = `${value}%`;
        
        progressBar.style.background = `conic-gradient(
         rgb(131, 131, 131) ${value * 3.6}deg,
         #fff ${value * 3.6}deg)`
       
            if (value == endValue) {
                clearInterval(progress)
            }
            
        },speed)
    }
    progress()
    bol = true

    // couter 2



let value2 = 0;
let endValue2 = 80;
let speed2 = 55;

function progress2(){

    let progress2 = setInterval(() => {
        value2 ++
        progressValue2.textContent = `${value2}%`;
        
         progressBar2.style.background = `conic-gradient(
        rgb(131, 131, 131) ${value2 * 3.6}deg,
         #fff ${value2 * 3.6}deg)`
       
        
        if (value2 == endValue2) {
            clearInterval(progress2)
        }
        
    },speed2)
}
progress2()
bol = true;

//counter 3



let value3 = 0;
let endValue3 = 93;
let speed3 = 65;

function progress3(){

    let progress3 = setInterval(() => {
        value3 ++
        progressValue3.textContent = `${value3}%`;
        
        progressBar3.style.background = `conic-gradient(
         rgb(131, 131, 131) ${value3 * 3.6}deg,
         #fff ${value3 * 3.6}deg)`
       
        
        if (value3 == endValue3) {
            clearInterval(progress3)
        }
        
    },speed3)
}
progress3()
bol =true;



    }
})









// vertical slider


    
    
    
    const donation = document.querySelector('.make-donation-amounts')
   const donationBtn = document.querySelectorAll('.make');
//    console.log(donationBtn);



donationBtn.forEach((btn) =>{
    btn.addEventListener('click', () => {

        
                btn.classList.add('change-donation')
        donationBtn.forEach((item) =>{
            if(item !== btn ){
               item.classList.remove('change-donation') 
            }
        })

    })
})

//  FAQS

const questions = document.querySelectorAll('.faq-contents-item')

questions.forEach((question)=>{
    question.addEventListener('click',()=>{
        question.classList.toggle('show-faq')
    })
})


//our teams
const flipBnts = document.querySelector('.readone')
const front = document.querySelector('.flip-front1')
const back = document.querySelector('.flip-back1')
const closeBnt = document.querySelector('.x-1')
   flipBnts.addEventListener('click', () => {
        front.classList.add('add1')
        back.classList.add('sub1')
      
    })   
closeBnt.addEventListener('click', () =>{
    front.classList.remove('add1')
    back.classList.remove('sub1')
})
const flipBnts2 = document.querySelector('.readtwo')
const front2 = document.querySelector('.flip-front2')
const back2 = document.querySelector('.flip-back2')
const closeBnt2 = document.querySelector('.x-2')
   flipBnts2.addEventListener('click', () => {
        front2.classList.add('add1')
        back2.classList.add('sub1')
      
    })   
closeBnt2.addEventListener('click', () =>{
    front2.classList.remove('add1')
    back2.classList.remove('sub1')
})
const flipBnts3 = document.querySelector('.readthree')
const front3 = document.querySelector('.flip-front3')
const back3 = document.querySelector('.flip-back3')
const closeBnt3 = document.querySelector('.x-3')
   flipBnts3.addEventListener('click', () => {
        front3.classList.add('add1')
        back3.classList.add('sub1')
      
    })   
closeBnt3.addEventListener('click', () =>{
    front3.classList.remove('add1')
    back3.classList.remove('sub1')
})


function Gallery(element){
    this.container = element 
    // console.log(this.container);
    this.list = [...element.querySelectorAll('.galary-img')]
    this.modal = getElement('.modal')
    this.modalImg = getElement('.main-img')
    this.modalImages = getElement('.gallery-photos')
    this.closebtn = getElement('.close-G')
    this.prevModalBtn = getElement('.prev-modal-btn')
    this.nextModalBtn = getElement('.next-modal-btn')

    // this.openModal = this.openModal.bind(this)

    this.closeModal = this.closeModal.bind(this)
    this.nextImage = this.nextImage.bind(this)
    this.prevImage = this.prevImage.bind(this)


    this.container.addEventListener('click',function(e){
        if (e.target.classList.contains('galary-img')) {
            
            this.openModal(e.target, this.list)
        }
    }.bind(this));
    
}

Gallery.prototype.openModal = function(selectedImage, list){
    this.setMainImage(selectedImage);
    this.modal.classList.add('open')
  
    this.closebtn.addEventListener('click', this.closeModal)
    this.nextModalBtn.addEventListener('click', this.nextImage)
    this.prevModalBtn .addEventListener('click', this.prevImage)
}


Gallery.prototype.setMainImage = function(selectedImage){
    this.modalImg.src = selectedImage.src
}

Gallery.prototype.closeModal = function(){
    this.modal.classList.remove('open')
}

Gallery.prototype.nextImage = function () {
    const selected = this.modalImages.querySelector('.selected');
    const next =
    selected.nextElementSibling || this.modalImages.firstElementChild;
    selected.classList.remove('selected');
    next.classList.add('selected');
    this.setMainImage(next);
  };
  Gallery.prototype.prevImage = function () {
    const selected = this.modalImages.querySelector('.selected');
    const prev =
      selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove('selected');
    prev.classList.add('selected');
    this.setMainImage(prev);
  };


const gallery = new Gallery(getElement('.gallery-photos'))


const galleryM = document.querySelector('.gallery')
const galleryPhotos = document.querySelector('.gallery-photos')
const closeM = document.querySelector('.close-G')

galleryPhotos.addEventListener('click',()=>{
    galleryM.classList.add('overlay')
})
closeM.addEventListener('click',()=>{
    galleryM.classList.remove('overlay')
})



//sponsor slider

const slideT = document.querySelector('.top-slider')
const thumbnails = document.querySelectorAll('.thumbnail')
const bntTleft = document.querySelector('.sliderbtn-left')
const bntTright = document.querySelector('.sliderbtn-right')


bntTleft.addEventListener('click', () =>{
    slideT.scrollLeft -= 250;
})
bntTright.addEventListener('click', () =>{
    slideT.scrollLeft += 250;
})
const maxScroll = slideT.scrollWidth - slideT.clientWidth;

function autoplaySlider (){
    if (slideT.scrollLeft > (maxScroll -1)) {
        slideT.scrollLeft -= maxScroll;
    }
    else{
        slideT.scrollLeft += 1;
    }
}
let play = setInterval(autoplaySlider, 50)

thumbnails.forEach((thumbnail)=>{
    thumbnail.addEventListener('mouseover', () =>{
        clearInterval(play)
    })
})
thumbnails.forEach((thumbnail)=>{
    thumbnail.addEventListener('mouseout', () =>{
      return play = setInterval(autoplaySlider, 50)
    })
})


const navBar3 = document.querySelector('.navbar-3')
const navBar3Height = navBar3.getBoundingClientRect().top;

// console.log(navBar3Height);

window.addEventListener('scroll',fixednav)

function fixednav(){
    const navHeight = window.pageYOffset
   if (navHeight > 170) {
       navBar3.classList.add('show-fixed-nav-3')
   }else{
       navBar3.classList.remove('show-fixed-nav-3')
   }
}

const campaigns_section = document.querySelector('.feature-latest')
const campaigns_value = document.querySelector('.value-bar')
const innerbar= document.querySelector('.inner-bar')
campaigns_section.addEventListener('mouseover', ()=>{

    const increaseCampaing = () =>{

        const target_number1 = campaigns_value.getAttribute('data-c')
        const current_number1 = parseInt(campaigns_value.innerText)

        if (current_number1 < target_number1) {
            campaigns_value.innerText = current_number1 + 1;
            setTimeout(increaseCampaing, 45)
        }else{
            campaigns_value.innerText = target_number1;
        }
    }
    increaseCampaing()

    innerbar.classList.add('bar')

    
})



const hvalues = document.querySelectorAll('.h-value')
const hsection = document.querySelector('.testimonals')










hsection.addEventListener('mouseover', function(){
    
   
        hvalues.forEach((hvalue) =>{
            const  increaseCounter = () =>{
                 const target_number = hvalue.getAttribute('data-h')
                 const current_number = parseInt(hvalue.innerText)
               
                 if (current_number < target_number) {
                 const target_number = hvalue.getAttribute('data-h')
                     hvalue.innerText = Math.floor(current_number +  target_number/ 100);
                     setTimeout(increaseCounter, 100)
                 }else{
                     hvalue.innerText = target_number
                 }
             }
             increaseCounter();
            })
    
})

// lastest event slider

const carouselContainer = document.querySelector('.latest-events-cards')
const carouselSlide = document.querySelectorAll('.latest-events-card')
const carouselBtnUp = document.querySelector('.up')
const carouselBtnDown = document.querySelector('.down')

//first monitor the slider with a counter

let counter = 1;
// width of the image
const size = carouselSlide[0].clientHeight;
//start from the second slide
 carouselContainer.style.transform = 'translateY(' + (-size * counter) + 'px)';

carouselBtnUp.addEventListener('click',()=>{
   if (counter >= carouselSlide -1 ) return;
    carouselContainer.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselContainer.style.transform = 'translateY(' + (-size * counter) + 'px)';
})
carouselBtnDown.addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselContainer.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselContainer.style.transform = 'translateY(' + (-size * counter) + 'px)';
})

carouselContainer.addEventListener('transitionend', ()=>{
    if (carouselSlide[counter].id === 'last-clone') {
    carouselContainer.style.transition = 'none';
    counter = carouselSlide.length - 3;
    carouselContainer.style.transform = 'translateY(' + (-size * counter) + 'px)';
    }
    if (carouselSlide[counter].id === 'first-clone') {
    carouselContainer.style.transition = 'none';
    counter = carouselSlide.length - counter;
    carouselContainer.style.transform = 'translateY(' + (-size * counter) + 'px)';
    }
})

