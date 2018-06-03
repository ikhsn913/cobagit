
$('.page-scroll').on('click', function(e){

  //ambil isi href
  var tujuan = $(this).attr('href');
  //ambil element
  var elTujuan = $(tujuan);

  $('html, body').animate({
    scrollTop: elTujuan.offset().top - 30
  }, 1000);

  e.preventDefault();


});
