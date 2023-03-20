document.querySelector( "#retrobg-sun" ).onclick = () => {
	document.querySelector( "#retrobg" ).classList.toggle( "retrobg-shutdown" );
};

$('.textglitch').hover(function(){
  var eLtext = $(this).text(),
      eLchild = $(this).find('.textglitch-link');
  console.log(eLchild);
  eLchild.attr('data-content', eLtext);
  eLchild.toggleClass('blur');
  $(this).toggleClass('active');
});