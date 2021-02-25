const hb=document.querySelector('.header_humburger');
const menu=document.querySelector('.fount');
const body=document.querySelector('.body');

hb.addEventListener('click',function (){
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})
