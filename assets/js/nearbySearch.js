// Hardcoded 5000m pizza search

let key = "key=AIzaSyAJjBoiRwsuo2RoC88RvMD4yWfEnyN0Hl0";

$.ajax({
    url: `https://maps.googleapis.com/maps/api/place/textsearch/json?location=32.766710,-117.226453&radius=5000&type=restaurant&keyword=pizzae&${key}&formatted_address`,
    request: "GET",
    dataType: 'jsonp',
}).then(function (response) {
    console.log(response.results);
})