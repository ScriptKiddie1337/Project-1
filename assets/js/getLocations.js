$(document).ready(function () {

    var lat = "";
    var long = "";
    var userLocation =""
    var searchRadius ="1500"
    var searchType = "restaurant"

    $.ajaxPrefilter(function(options) {
        if (options.crossDomain && $.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });


    findLocationByBrowser();
    // Hardcoded 5000m pizza search
    var key = "AIzaSyAanF7HzrZs0nv_lhvjDcr2vvjtmbyJYAQ";


    $("#testButton").on("click", function () {
        findLocationByBrowser();
    });

    $("#testLocations").on("click", function () {
        getLocations();
    });

    function findLocationByBrowser() {
        navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
    }

    function getLocationSuccess(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        userLocation = lat + "," + long;

        console.log(userLocation);

        /*   do_something(position.coords.latitude, position.coords.longitude); */

        var url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation}&radius=${searchRadius}&key=${key}&libraries="places"`;
        insertBaseMap()
    }

    function insertBaseMap() {
        var mapOptions = {
            center: new google.maps.LatLng(lat, long),      
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.street
        }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }

    function getLocationError(err) {
        console.log('Error geolocating', err);

         var url= `https://maps.googleapis.com/maps/api/place/textsearch/json?location=32.766710,-117.226453&radius=${searchRadius}&type=${searchType}&rankby=distance&keyword=pizza&${key}&formatted_address`;

      /*    getAjaxLocation(url) */
    }

   /*  function getAjaxLocation(url){

        $.ajax({
            url: url,
            request: "GET",
            dataType: 'json',
        }).then(function (response) {
            console.log(response.results);
        });
    } */

    var map;
    var service;

    function getLocations() {
        var mapCenter = new google.maps.LatLng(lat, long);

        map = new google.maps.Map(document.getElementById('map'), {
            center: mapCenter,
            zoom: 18
        });

        var request = {
            location: mapCenter,
            radius: '1500',
            type: ['restaurant']
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
    }

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);
                console.log(place);
            }
        }
    }

});