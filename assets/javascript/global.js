// HAMBURGER JS 


var menu = document.querySelector(".menu") 
var spanone = document.querySelector(".line-1")
var spantwo = document.querySelector(".line-2")
var spanthree = document.querySelector(".line-3")




menu.onclick = () => {
    spantwo.classList.toggle("li2ne")
    spanone.classList.toggle("l1ine")
    spanthree.classList.toggle("lin3e")


}
