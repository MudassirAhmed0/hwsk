const nextBtn = document.querySelector('.majorCarouselNext')
const prevBtn = document.querySelector('.majorCarouselPrev')
const majorCarouselSlides = document.querySelectorAll('.majorCarouselSlide')
const majorPaginationDots = document.querySelectorAll('.majorPagination span')
let majorCarouselSlideNo = 0
let width =  window.innerWidth >= 1024? 22.65625:43 
let translateX = (window.innerWidth / 100) * width   

const changeMajorActivePaginationClass =()=>{
  let activeClass = window.innerWidth >= 1024?'lg:w-[4.270vw]': 'w-[55px]'
  let nonActiveClass = window.innerWidth >= 1024?'lg:w-[1.354vw]': 'w-[25px]'
  majorPaginationDots.forEach((item,index)=>{
      if(index == majorCarouselSlideNo){
          item.classList.add(activeClass)
          item.classList.remove('opacity-[0.5]')
          item.classList.remove(nonActiveClass)
      }else{
          item.classList.remove(activeClass)
          item.classList.add(nonActiveClass)
          item.classList.add('opacity-[0.5]')

      }
  })
}


const changeMajorSlide = ()=>{
  console.log(majorCarouselSlideNo)
  majorCarouselSlides.forEach((slide,index)=>{
    if(index == majorCarouselSlideNo){
      slide.classList.add('majorCarouselSlideActive')
    }else{
      slide.classList.remove('majorCarouselSlideActive')
    } 
    slide.style.transform=`translateX(-${translateX * majorCarouselSlideNo}px)`
  })
} 
const handleMajorNext =()=>{
  majorCarouselSlideNo = majorCarouselSlideNo != majorCarouselSlides.length - 1 ? majorCarouselSlideNo + 1: majorCarouselSlideNo
 changeMajorSlide()
 changeMajorActivePaginationClass()
}
const handlePrevNext =()=>{
  majorCarouselSlideNo = majorCarouselSlideNo != 0 ? majorCarouselSlideNo - 1: majorCarouselSlideNo
 changeMajorSlide()
 changeMajorActivePaginationClass()
}

const handleMajorSlideChange =(slideNo)=>{
  majorCarouselSlideNo = slideNo
  changeMajorSlide() 
 changeMajorActivePaginationClass()

}

majorPaginationDots.forEach((dot,index)=>{
  dot.addEventListener('click', ()=> handleMajorSlideChange(index))
})

majorCarouselSlides.forEach((slide,index)=>{
  slide.addEventListener('click', ()=> handleMajorSlideChange(index))

})

nextBtn.addEventListener('click',handleMajorNext)
prevBtn.addEventListener('click',handlePrevNext)




const publicationParalax = document.getElementById("publicationParalax")

window.addEventListener('scroll',()=>{
    let scrolled =window.scrollY
    if(scrolled < window.innerHeight  / 100 * 130){
        publicationParalax.classList.remove('blur-[12px]')
      
    }else{
        
        publicationParalax.classList.add('blur-[12px]')
    } 
   
})