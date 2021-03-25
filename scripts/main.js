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

      var brandlogo = a.brand.toLowerCase().replace(/\s+/g, '');

      $("#tech").append(`
        <div class="card grow sale">
          <a class="text-dark" href="${a.link}" target="_blank">
            <div class="card-img-top">
              <img class="wide" src="${a.picture}" alt="${a.brand}">
            </div>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <img class="brand-logo" src="assets/affiliates/${brandlogo}.svg">
          </a>
        </div>
      `);
        //$("#tech").append(`<div style="display:inline-block;margin:10px;"><a href="${a.link}" target="_blank"><img width="350" src="${a.picture}" alt="${a.brand}"></a></div>`);
    });
  });



  /* handle popups */



});


/* extra style */

// disable right click
document.oncontextmenu = new Function("return false;");
