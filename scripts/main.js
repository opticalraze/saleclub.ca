$(document).ready(function() {

  /* load page data */

  // global variable
  var data;
  var nocache = '?nocache='+Date.now();

  $.get('data/sales.json'+nocache, function(d) {
    //data = JSON.parse(d); works on localhost

    // make json parse work on ghpages
    try { // localhost
        data = JSON.parse(d);
    }
    catch(err) { // ghpages
        data = JSON.stringify(d);
        data = JSON.parse(data);
    }

    //console.log(data);

    //var firstLoop = true;
    var arrayRow = 0;
    data.dod.forEach(function(a) {
      //if (firstLoop) {
      if (arrayRow == 0) {
        $("#dod").append(`<div class="carousel-item active"><a href="${a.link}" target="_blank"><img class="d-block w-100" src="${a.picture}" alt="${a.brand}"></a></div>`);
        $("#dodIndicators").append(`<li data-target="#carouselExampleIndicators" data-slide-to="${arrayRow}" class="active"></li>`);
        arrayRow++;
      } else {
        $("#dod").append(`<div class="carousel-item"><a href="${a.link}" target="_blank"><img class="d-block w-100" src="${a.picture}" alt="${a.brand}"></a></div>`);
        $("#dodIndicators").append(`<li data-target="#carouselExampleIndicators" data-slide-to="${arrayRow}"></li>`);
        arrayRow++;
      }
    });

    //firstLoop = true;
    /*data.categories.forEach(function(a) {

        $("#tech").append(`<div style="display:inline-block;margin:10px;"><a href="${a.link}" target="_blank"><img width="350" src="${a.picture}" alt="${a.brand}"></a></div>`);
    });*/

    data.tech.forEach(function(a) {

      var brandLogo = a.brand.toLowerCase().replace(/\s+/g, '');

      $("#tech").append(`<div class="card grow sale"><a class="text-dark" href="${a.link}" target="_blank"><div class="card-img-top"><img class="wide" src="${a.picture}" alt="${a.brand}"></div><div class="card-body"><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div><img class="brand-logo" src="assets/affiliates/${brandLogo}.svg"></a></div>`);

    });
  });



  /* handle popups */

  // about popup
    $("#about-popup").on('click', function(e){
      if (e.target !== this)
        return;
      else{
        $(this).hide();

        $('body').css('overflow', 'auto'); // show scrollbar
        $('body').css('margin-right', '0px'); // remove scrollbar padding
        $('body').addClass('bg-danger').removeClass('bg-light');
      }
    });

    $("#show-about-popup").on("click", function() {
      $("#about-popup").show();

      $('body').css('overflow', 'hidden'); // hide scrollbar
      $('body').css('margin-right', '10px'); // add scrollbar padding
      $('body').addClass('bg-light').removeClass('bg-danger');
    });
    $("#close-about-popup").on('click', function(e){
      $('#about-popup').fadeOut(200);

      $('body').css('overflow', 'auto'); // show scrollbar
      $('body').css('margin-right', '0px'); // remove scrollbar padding
      $('body').addClass('bg-danger').removeClass('bg-light');
    });


    // notice popup
      $("#notice-popup").on('click', function(e){
        if (e.target !== this)
          return;
        else{
          $(this).hide();

          $('body').css('overflow', 'auto'); // show scrollbar
          $('body').css('margin-right', '0px'); // remove scrollbar padding
          $('body').addClass('bg-danger').removeClass('bg-light');
        }
      });

      $("#show-notice-popup").on("click", function() {
        $("#notice-popup").show();

        $('body').css('overflow', 'hidden'); // hide scrollbar
        $('body').css('margin-right', '10px'); // add scrollbar padding
        $('body').addClass('bg-light').removeClass('bg-danger');
      });
      $("#close-notice-popup").on('click', function(e){
        $('#notice-popup').fadeOut(200);

        $('body').css('overflow', 'auto'); // show scrollbar
        $('body').css('margin-right', '0px'); // remove scrollbar padding
        $('body').addClass('bg-danger').removeClass('bg-light');
      });



      // contact popup
        $("#contact-popup").on('click', function(e){
          if (e.target !== this)
            return;
          else{
            $(this).hide();

            $('body').css('overflow', 'auto'); // show scrollbar
            $('body').css('margin-right', '0px'); // remove scrollbar padding
            $('body').addClass('bg-danger').removeClass('bg-light');
          }
        });

        $("#show-contact-popup").on("click", function() {
          $("#contact-popup").show();

          $('body').css('overflow', 'hidden'); // hide scrollbar
          $('body').css('margin-right', '10px'); // add scrollbar padding
          $('body').addClass('bg-light').removeClass('bg-danger');
        });
        $("#close-contact-popup").on('click', function(e){
          $('#contact-popup').fadeOut(200);

          $('body').css('overflow', 'auto'); // show scrollbar
          $('body').css('margin-right', '0px'); // remove scrollbar padding
          $('body').addClass('bg-danger').removeClass('bg-light');
        });




});


/* prevent hash anchor tag jumping */
/* <![CDATA[ */
( function( $ ) {
   $( 'a[href="#"]' ).click( function(e) {
      e.preventDefault();
   } );
} )( jQuery );
/* ]]> */

/* extra style */

// disable right click
document.oncontextmenu = new Function("return false;");
