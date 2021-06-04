$('.skill_per').each(function (){
    var $this = $(this);
    var per = $this.attr('per');
   $this.css('width',per+'%');
   $({animatedValue: 0}).animate({animatedValue: per},{
       duration: 1000,
       step: function(){
           $this.attr('per', Math.floor(this.animatedValue) + '%');
       },
       complete: function(){
           $this.attr('per', Math.floor(this.animatedValue) + '%');
       }
   });
});

let item = document.querySelectorAll('.testimonial_item:nth-child(odd)');
// console.log(item);
item.forEach(function(item){
    item.style.background = 'red';
    item.style.marginRight = '15px';
});

let even_item = document.querySelectorAll('.testimonial_item:nth-child(even)');
// console.log(item);
even_item.forEach(function(item){
    item.style.background = "green";
    item.style.marginLeft = '15px';

});


AOS.init({

    duration: 800, 
    offset : 200,
    once: true,
   
  
  });
  // preloader
function preloader() {
	$('#preloader').delay(1000).fadeOut();
};

$(window).on('load', function () {
	preloader(),
	wowanimation();
});