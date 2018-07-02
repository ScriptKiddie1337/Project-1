// This function will return an array of iframes for each location
function generateMapsFromIds(placeIds) {

    var result = []

    placeIds.forEach(function (placeId) {

        result.push(`<iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=AIzaSyAqx5_ZLRfWwMNRyxFNuvdvkSiD3tSvfxM"
        allowfullscreen></iframe>`)
    })

    return result
}

//Stop carousel auto-slide
$('.carousel').carousel({
    interval: false
}); 