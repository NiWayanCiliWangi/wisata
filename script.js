let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};
//Reviews Slider with Responsive Breakpoints//
var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});
//variable swiper
var swiper = new Swiper(".reviews-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});
//module loadMoreBtn//
let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}
//user validation//
class Validation {
   
   name='';
 
 
   validationNama(val){
     let result = /^[a-zA-Z ]+$/.test(val);
     if(result==false){
       return "Invalid Input Name"
     }
   }
 
   validationEmail(val){
     let result = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
     if(result==false){
       return "Invalid Input Email"
     }
   }
 
   validationPhone(val){
     let result =/^\d+$/.test(val)
     if(result==false){
       return "Invalid Input No HP"
     }
   }
   validationPax(val){
     if(val==0){
       return "Invalid Input Jumlah Orang"
     }
     let result =/^\d+$/.test(val)
     if(result==false){
       return "Invalid Input Jumlah Orang"
     }
   }
 
 
 }