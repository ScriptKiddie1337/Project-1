// Hardcoded 5000m pizza search

let key = "key=AIzaSyAqx5_ZLRfWwMNRyxFNuvdvkSiD3tSvfxM"

function searchNearby(location, term) {

    console.log(location)
    $.ajax({
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=5000&keyword=${term}&${key}`,
        // url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${term}&${key}`,
        request: "GET",
        dataType: 'json',
    }).then(function (response) {

        let placesIds = []
        response.results.forEach(function (result, index) {
            // Only get 10 results
            if (index < 10) {
                placesIds.push(result.place_id)
            }
        })

        addCarsouselItems(placesIds)
    })


}
