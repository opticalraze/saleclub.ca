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

    var firstLoop = true;
    data.dod.forEach(function(a) {
      if (firstLoop) {
        $("#dod").append(`<div class="carousel-item active"><a href="${a.link}" target="_blank"><img class="d-block w-100" src="${a.picture}" alt="${a.brand}"></a></div>`);
        firstLoop = false;
      } else {
        $("#dod").append(`<div class="carousel-item"><a href="${a.link}" target="_blank"><img class="d-block w-100" src="${a.picture}" alt="${a.brand}"></a></div>`);
      }
    });

    //firstLoop = true;
    data.tech.forEach(function(a) {
        $("#tech").append(`<div style="display:inline-block;margin:10px;"><a href="${a.link}" target="_blank"><img width="350" src="${a.picture}" alt="${a.brand}"></a></div>`);
    });
  });



  /* handle popups */



});


/* extra style */

// disable right click
document.oncontextmenu = new Function("return false;");
