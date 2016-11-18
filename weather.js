$(document).ready(function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude
      var lon = position.coords.longitude
      $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=7b9b46e9923a49c226b86804b6d47e0e`,
      function(json){
        debugger
        $(".weather").html(json)
      });
    });
  }

});
