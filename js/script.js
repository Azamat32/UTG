
console.log('hello');

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 5000,

    },
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    // And if we need scrollbar
 });
  
const filesBtn = document.querySelectorAll('#files')
const filesDrop = document.querySelector('.files_top_dropdown')
for (let i = 0; i < filesBtn.length; i++) {
    const e = filesBtn[i];
    
    e.addEventListener('click', () =>
     {
         filesDrop.classList.toggle("show")
         ;}
    )

}

let element = document.getElementById('navbar_smoth');
window.addEventListener('scroll', function () {
   if (window.scrollY > 185) {
        element.classList.add("shadow");
    } else {
        element.classList.remove("shadow");
    }
});



