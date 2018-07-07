
$(document).ready(function () {

    // enter api key 
    let giphyApiKey = "api_key=" + "Cfr5S4u6v2caXyLC4CeF8pn4n6kbGJSk"

    //preload gif
    // let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "search" + "&" + giphyApiKey + "&limit=10"
    // loadgifmatrix(queryURL)

    //get input
    $("#searchBtn").on("click", function (event) {

        event.preventDefault();

        $(".loading-indicator").css("visibility", "visible")

        //load search gif
        searchQuery = $(".searchInput").val().trim()

        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&" + giphyApiKey + "&limit=10"

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                let gifs = []
                //loop through the 10 gifs adding attribute for each
                for (let i = 0; i < response.data.length; i++) {

                    gifImage = response.data[i].embed_url

                    gifs.push(gifImage)
                }

                searchNearby(userData.location, searchQuery, gifs)
            })
    })

})