$(document).ready(function () {
    var baseUrl = "http://ipinfo.io/";
    /* var thisIp = "128.211.52.201"; */
    var thisIp = "203.18.219.169";

    $("#testBtn").on("click", function () {
        /*  alert("button was clicked"); */
        // Calling find location by ip to get user gps coordinates
       /*  findLocationByUrl(thisIp); */
        findLocationByBrowser();
    });

    var lat="";
    var long="";
    function findLocationByBrowser(){

        navigator.geolocation.getCurrentPosition(function(position) {
            lat=position.coords.latitude;
            long=position.coords.longitude;
            console.log(lat + " " + long)
          /*   do_something(position.coords.latitude, position.coords.longitude); */
          });
    }
   

    function findLocationByUrl(ipToLocate) {
        fetch(baseUrl + thisIp,{headers:{'content-type': 'application/json'}})
            .then(function (response) {
                console.log(response);
                return response.json();
            }).catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

    }
});