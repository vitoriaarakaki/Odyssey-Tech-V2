const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

window.addEventListener('DOMContentLoaded', function(){

    window.addEventListener('resize', function(){
        wrapperDistance()
    })

    window.scrollTo(window.scrollX, window.scrollY - 1)

    wrapperDistance()
})

// coloca padding em elementos sem wrapper para alinhar a grid
function wrapperDistance(){
    let distance = $('.wrapper').offsetLeft

    $$('.wrapper-left').forEach(function(item){
        item.style.paddingLeft = `${distance}px`
    })
    $$('.wrapper-left').forEach(function(item){
        item.style.paddingRight = `${distance}px`
    })
}

const filtrarMobile = document.querySelector('.menu-mobile');
const fecharMenu = document.querySelector('.fechar-menu');
const Abrirmenu = document.querySelector('.aside-menu')
Abrirmenu.addEventListener('click', function () {
  filtrarMobile.style.visibility = 'visible';
  filtrarMobile.style.width = '90%';
});
fecharMenu.addEventListener('click', function () {
  filtrarMobile.style.visibility = 'hidden';
  filtrarMobile.style.width = '0';
});


             // ANIMAÇÃO PASSAGENS 


var splide = new Splide( '.splide', {
  type    : 'loop',
  perPage : 3,
  autoplay: true,
   } );

  splide.mount();


           //ANIMAÇÃO BOTÃO UP 


function scrolltop(){
window.scrollTo({
top:0,
behavior: 'smooth'
})
  }


VanillaTilt.init(document.querySelectorAll(".cardi"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,
});