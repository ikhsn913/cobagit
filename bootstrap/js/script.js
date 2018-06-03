
$('.page-scroll').on('click', function(e){

  //ambil isi href
  var tujuan = $(this).attr('href');
  //ambil element
  var elTujuan = $(tujuan);

  $('html').animate({
    scrollTop: elTujuan.offset().top
  });

  e.preventDefault();


});
