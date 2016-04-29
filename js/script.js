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
});
