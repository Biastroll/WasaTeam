const navMenu = document.querySelector('.nav_toggle');
const navMain = document.querySelector('.nav');
const navList = document.querySelector('.list');
const navItem = document.querySelectorAll('.nav_item');

navMenu.addEventListener('click',function(){
    navMain.classList.toggle('active');
    navList.classList.toggle('active');
    navItem.forEach(function(data){
        data.classList.toggle('active');
    })
});