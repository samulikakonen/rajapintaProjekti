
$(document).ready(function() {
  console.log("Document loaded...");
  createAlbums();
});


function loadAlbumData() {
  var albums;
  $.getJSON( "data.json", function( data ) {
    albums = data;
  });
  return albums;
}

function createAlbums() {
  var data = loadAlbumData();

  var albums = "";

  for (var i = 1; i < 10; i++) {
    albums += "<div class='col-sm-3' id='col" + i + "'>" + createAlbumContent(i) + "</div>";
  }

  $("#row").html(albums);
  for (var i = 1; i < data.albums.length; i++) {
    $("#col"+i).css("background-image", "url('./images/kuve.jpg')");
    $(".col-sm-3").css("height", $(".col-sm-3").width() + "px");
  }

}

function createAlbumContent(i) {
  var cont = "<ul class ='jotai'>" +
  "<li class='item1'>Albumi"+ i +"</li>" +
  "<li class='item2'>toka item</li>" +
  "</ul>";
  return cont;
}
