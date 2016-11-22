$(document).ready(function(){
  if(navigator.geolocation){
      getWeatherData();
  }
  $(".fahrenheit").hide();
  $(".fahrenheit").on("click", convertToFahrenheit);
  $(".celsius").on("click", convertToCelsius);
});

function getWeatherData() {
  navigator.geolocation.getCurrentPosition(function(position){
    var lat = position.coords.latitude
    var lon = position.coords.longitude
    $.getJSON(`http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&APPID=7b9b46e9923a49c226b86804b6d47e0e`,
      processWeatherData
    );
  });
}

function processWeatherData(json) {
  var tempf = Math.round(json.main.temp)

  var city = json.name
  var clouds = json.clouds.all
  if(clouds > 1){
    document.getElementById("currentimage").src = "http://pre02.deviantart.net/0d11/th/pre/f/2014/241/7/4/cloudy_text_effect_by_dpas602-d7x604y.png"
  }
  var currentweather = $(".weather").html

  $(".weather").html(tempf + "&deg")
  $(".location").html(city)
}

function convertToCelsius() {
  var tempf = $(".weather").html().slice(0, -1);
  console.log(tempf + "temp fahrenheit")
  var tempc = Math.round((5/9) * (parseInt(tempf, 10) - 32));
  console.log(tempc)
  $(".weather").html(tempc + "&deg");
  $(".celsius").hide();
  $(".fahrenheit").show();
}

function convertToFahrenheit() {
  var tempc = $(".weather").html().slice(0, -1);
  console.log(tempc)
  var tempf = Math.round((9/5) * parseInt(tempc, 10) + 32);
  console.log(tempf + "temp fahrenheit")
  $(".weather").html(tempf + "&deg");
  $(".fahrenheit").hide();
  $(".celsius").show();
}
