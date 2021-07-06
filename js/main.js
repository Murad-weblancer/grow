const burger = document.querySelector('.burger');
const list = document.querySelector('.navbar__list');
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    list.classList.toggle('active');
})
const modal = document.querySelector('.modal');
const modalContetn = document.querySelector('.modal__content');
const close = document.querySelector('.close');
const btnModal = document.querySelector('.navbar__modal');
const sub = document.querySelector('.rel');
btnModal.addEventListener('click', function(){
    modal.style.opacity = '1';
    modal.style.visibility = 'visible';
    setTimeout(() => {
        modalContetn.style.top = 0;
    }, 300);
})
close.addEventListener('click', function(){
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
})
window.addEventListener('click', function(event){
    if(event.target == modal){
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        modalContetn.style.top = '-100%';}
})
sub.addEventListener('click', function(){
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
})
$('.wrapper__slider').slick({
    infinite: true,
    slidesToShow: 2.8,
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,

            }

        },
        {
            breakpoint: 724,
            settings: {
                slidesToShow: 1,

            }

        },
    ]
});
// 
$('.son__slide').slick({
    infinite: true,
    slidesToShow: 2.3,
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,

            }

        },
    ]
});



