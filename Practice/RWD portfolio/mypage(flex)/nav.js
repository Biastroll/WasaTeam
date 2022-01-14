const navMenu = document.querySelector('.nav_trigger');
const navList = document.querySelector('.list');

navMenu.addEventListener('click',function(){
    navList.classList.toggle('active');
});