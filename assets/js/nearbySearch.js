// Hardcoded 5000m pizza search

let key = "key=AIzaSyAqx5_ZLRfWwMNRyxFNuvdvkSiD3tSvfxM"

function searchNearby(location, term, gifs) {

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

<<<<<<< HEAD
        addCarsouselItems(placesIds)
=======
        let detailedResults = []

        placesIds.forEach(function (placedId, index) {

            $.ajax({
                url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placedId}&${key}`,
                request: "GET",
                dataType: "json",
                // Use synchronous requests so get results in order
                async: false
            }).then(function (response) {
                detailedResults.push(response.result)
                // add Carousel after last response
                if (index == (placesIds.length - 1)) {
                    addCarsouselItems(placesIds, detailedResults, gifs)
                }
            })
        })
>>>>>>> master
    })


}
