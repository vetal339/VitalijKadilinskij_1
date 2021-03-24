const hb=document.querySelector('.header_humburger');
const menu=document.querySelector('.header_pos');
const body = document.querySelector('body');

hb.addEventListener('click',function (){
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})
