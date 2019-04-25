$("nav a").click(function(e) {
  e.preventDefault();
  
  var id = $(this).attr("href"),
      targetOffset = $(id).offset().top,
      menuHeight = $("nav").innerHeight();
    
  $("html, body").animate({
    scrollTop: targetOffset - menuHeight}, 500
  );
});

(function() {
  var $target = $('.wrapper'),
      animationClass = 'anime-start',
      offset = $(window).height() * 3/4;
  
  function animeScroll() {
    var documentTop = $(document).scrollTop();
    
    $target.each(function() {
      var itemTop = $(this).offset().top;
      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      }
    })
  }
  
  animeScroll();
  
  $(document).scroll(function() {
    animeScroll();
  })
}());