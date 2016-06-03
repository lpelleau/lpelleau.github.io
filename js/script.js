$(document).ready(function(){
  $('.parallax').parallax();
  
  function w(e) {
    var m = 'loic';
    m += '@';
    m += 'pelleau.net';
    $(e).attr('href', 'mailto:' + m);
  };
  
  $('#ct').on('click', function() {w(this);});
  $('#ct').on('tap', function() {w(this);});

  setTimeout(function() {
    $(".parallax:first img").attr("src", "img/oratoire_st-joseph.jpg");
    window.scrollTo(0, 500);
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 10);
  }, 100);
});
