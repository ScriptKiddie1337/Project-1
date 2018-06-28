// Hardcoded 5000m pizza search

let key = "key=AIzaSyAqx5_ZLRfWwMNRyxFNuvdvkSiD3tSvfxM"

$.ajax({
    url: `https://maps.googleapis.com/maps/api/place/textsearch/json?location=32.766710,-117.226453&radius=5000&type=restaurant&keyword=pizzae&${key}&formatted_address`,
    request: "GET",
    dataType: 'jsonp',
}).then(function (response) {
    console.log(response.results)
})