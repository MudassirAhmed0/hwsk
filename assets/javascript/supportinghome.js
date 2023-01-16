const supportingGap = window.innerWidth >768 ?  window.innerWidth / 100 * 3.7 :30
var supportingSwiper = new Swiper(".supporting", {
    slidesPerView: "auto",
    spaceBetween: supportingGap ,
    loop: true,
    autoplay:true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });