const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    
});
 
$(document).ready(function(){
    $('.review__carusel').slick({
        speed: 1500,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5988 6.56266H2.18983L4.8147 3.9378L4.19599 3.31909L0.514893 7.00019L4.19599 10.6813L4.8147 10.0626L2.18978 7.43766H13.5988V6.56266Z" fill="#3A1212"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.401233 7.43728L11.8102 7.43728L9.1853 10.0621L9.80401 10.6808L13.4851 6.99975L9.80401 3.31865L9.1853 3.93736L11.8102 6.56228L0.401233 6.56228L0.401233 7.43728Z" fill="#3A1212"/></svg></button>'
    });

    $('.recipes__btns').click(function(){
		$('.recipes__content_act').slideToggle(300);      
		return false;
	});
  });
 