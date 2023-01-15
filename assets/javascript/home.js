const parallax1 = document.getElementById('parallax1')
const parallax2 = document.getElementById('parallax2')
const homeCounterContainer = document.getElementById('homeCounterContainer')
const homeCounterOffsetTop =   homeCounterContainer.offsetTop - (window.innerWidth /100 * 46.0416666667)
 
let counterFirstVisit = false

window.addEventListener('scroll',()=>{
    let scrolled =window.scrollY
    if(scrolled < window.innerHeight  / 100 * 130){
        parallax1.classList.add('opacity-1')
        parallax1.classList.remove('opacity-0')
        parallax2.classList.add('opacity-0')
        parallax2.classList.remove('opacity-1')
    }else{
        parallax2.classList.add('opacity-1')
        parallax2.classList.remove('opacity-0')
        parallax1.classList.add('opacity-0')
        parallax1.classList.remove('opacity-1')
    } 
    if(scrolled> homeCounterOffsetTop){
        
        if(!counterFirstVisit){
            counterFirstVisit = true
            $(".count").each(function () {
                $(this)
                  .prop("Counter", 0)
                  .animate(
                    {
                      Counter: $(this).text(),
                    },
                    {
                      duration: 2500,
                      easing: "swing",
                      step: function (now) {
                        $(this).text(Math.ceil(now));
                      },
                    }
                  );
              });
        }
    }
})