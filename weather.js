$(document).ready(function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude
      var lon = position.coords.longitude
      $.getJSON(`http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&APPID=7b9b46e9923a49c226b86804b6d47e0e`,
      function(json){
        var tempf = Math.round(json.main.temp)
        var tempc = Math.round((5/9) * (tempf - 32))
        var city = json.name
        var clouds = json.clouds.all
        if(clouds > 1){
          document.getElementById("currentimage").src = "http://pre02.deviantart.net/0d11/th/pre/f/2014/241/7/4/cloudy_text_effect_by_dpas602-d7x604y.png"
        }
        var currentweather = $(".weather").html

        $(".weather").html(tempf)
        $(".location").html(city)
        $("#button").on("click", function(){
          var currentweather = $(".weather").html()
          if(currentweather == tempf){
          $(".weather").html(tempc)
          $("#button").html("Convert to Fahrenheit")
          }
          else{
          $(".weather").html(tempf)
          $("#button").html("Convert to Celsius")
        }
        })

      });
    });
  }

});
