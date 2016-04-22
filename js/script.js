$(document).ready(function() {
  $('#ct').on('click', function() {
    var m = 'loic';
    m += '@';
    m += 'pelleau.net';
    $(this).attr('href', 'mailto:' + m);
  });
});
