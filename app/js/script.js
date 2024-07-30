
let activeSlide = 0


const slider_images = [
    'app/img/bad-boys.jpg',
    'app/img/deadpool.jpg',
    'app/img/insideout2.jpg',
    'app/img/jl3.jpg',
]
    const body = document.querySelector('body');
const slider_container = document.querySelector('.slider__container')



const addSliderImg = (images) => {
    let active = images[activeSlide];

    let sliderHTML = images.map((image) => {
        if (active === image) {
            return `<div class="slide active" style="background-image:url('${image}')"></div>`;
        }
        return `<div class="slide" style="background-image:url('${window.location.origin}/${image}')"></div>`;
    }).join('')

    sliderHTML += `<button class="arrow left__arrow" id="left"><i class="fas fa-arrow-left"></i></button>
        <button class="arrow right__arrow" id="right"><i class="fas fa-arrow-right"></i></button>`

        slider_container.innerHTML = sliderHTML
}

addSliderImg(slider_images)
const sliders = document.querySelectorAll('.slide')
    const leftBtn = document.querySelector('#left')
    const rightBtn = document.querySelector('#right')
const setBgBody = () => {
    
    body.style.backgroundImage = sliders[activeSlide].style.backgroundImage
}
setBgBody()
const setActiveSlide=()=>{
    sliders.forEach(slides=> slides.classList.remove('active'))
    sliders[activeSlide].classList.add('active')
}

rightBtn.addEventListener('click',()=>{
    
    
   nextSlide()
    setBgBody()
    setActiveSlide()
    
})
leftBtn.addEventListener('click',()=>{
    
   previousSlide()
    setBgBody()
    setActiveSlide()
    
})

const nextSlide=()=>{
    activeSlide++
    if(activeSlide > sliders.length - 1){
            activeSlide = 0
    }
}
const previousSlide=()=>{
    activeSlide--
  
    if(activeSlide === -1 ){  
            activeSlide = sliders.length-1
    }
}


setInterval(()=>{
    nextSlide()
    setBgBody()
    setActiveSlide()
},7000)