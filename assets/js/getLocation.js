// This file will ask the user for their location and store the result in the location variable
var userData = {
    location: ""
}

$(document).ready(function () {


    $.ajaxPrefilter(function (options) {
        if (options.crossDomain && $.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    // Hardcoded 5000m pizza search
    var key = "AIzaSyAanF7HzrZs0nv_lhvjDcr2vvjtmbyJYAQ";

    function getLocationSuccess(position) {
        let lat = "";
        let long = "";

        lat = position.coords.latitude;
        long = position.coords.longitude;
        userData.location = lat + "," + long;

        //     console.log(location);

        //     /*   do_something(position.coords.latitude, position.coords.longitude); */

        //   /*   var url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat.toString()},${long.toString()}&key=${key}`; */
        //     var url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.766710,-117.226453&key=AIzaSyAanF7HzrZs0nv_lhvjDcr2vvjtmbyJYAQ`;

        //    /*  document.getElementById("#map"). */
        //     getAjaxLocation(url)  
    }

    function getLocationError(err) {
        // TODO stubbed
    }

    function findLocationByBrowser() {
        navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
    }

    findLocationByBrowser();

})
