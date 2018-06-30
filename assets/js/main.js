// load the gif matrix
function loadgifmatrix(queryURL) {

    $("#gif-array").empty()

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            //loop through the 10 gifs adding attribute for each
            for (let i = 0; i < response.data.length; i++) {
                //load both the animated and still gif
                queryURLStill = response.data[i].images.fixed_height_still.url
                queryURLAnimate = response.data[i].images.fixed_height.url
                // set gifImage to the image container
                let gifImage = $("<img>")

                //set the src attribute the the still gif
                //gifImage.attr("src", queryURLStill)
                gifImage.attr("src", queryURLAnimate)
                //store both the still and animated gif in the attribute
                //this avoids scope problems if using variable
                gifImage.attr("urlDataAnimate", queryURLAnimate)
                gifImage.attr("urlDataStill", queryURLStill)
                //set the still attribute to yes 
                gifImage.attr("still", "yes")
                gifImage.addClass("startImage")

                $("#gif-array").prepend(gifImage)
            }
        })
}
$(document).ready(function () {

    // enter api key 
    let giphyApiKey = "api_key=" + "Cfr5S4u6v2caXyLC4CeF8pn4n6kbGJSk"

    //preload gif
    // let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "search" + "&" + giphyApiKey + "&limit=10"
    // loadgifmatrix(queryURL)

    //get input
    $("#searchBtn").on("click", function (event) {
        event.preventDefault();

        //load search gif
        searchQuery = $(".searchInput").val().trim()

        // Perform nearby search and update carousel
        searchNearby(userData.location, searchQuery)

        // queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&" + giphyApiKey + "&limit=10"
        // loadgifmatrix(queryURL)

    })

})