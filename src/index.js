let mobile_icon= document.getElementById("btn");
let mobile_menu= document.getElementById("menu");


mobile_icon.addEventListener("click",function(){
    mobile_menu.classList.toggle("hidden");
});


// selecting all a element on the page
const links = document.querySelectorAll('a');

// adding a click event on all elements 
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    // if we click first thing is deleting the active class from all link
    links.forEach((link) => {
      link.classList.remove('active')
    })
    // then in the end add the active class only in the correct one
    e.target.classList.add('active')
  })
})