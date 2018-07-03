function addCarsouselItems(placeIds) {

    $(".carousel-inner").empty()

    let embeddedMaps = generateMapsFromIds(placeIds)

    embeddedMaps.forEach(function (embeddedMap, index) {

        let active = ""

        if (index == 0) {
            active = "active"
        }

        $(".carousel-inner").append(`
            <div class="carousel-item ${active} page-container">
                <div class="row justify-content-center">
                    <div id="column1" class="col-md-4">
                        <div id="top-10-bar" class="d-inline-flex p-2 w-100">
                            <div id="gif-array" class="w-100 shadow-lg rounded">
                                <h1>Carousel Page ${index + 1}</h1>
                                <h1>Phase 1: Gif array list.</h1>
                                <h2>div id for javascript: #gif-array</h2>
                                <hr>
                                <h3>Business Name</h3>
                                <h4>Business Description</h4>
                                <h4>Google Reviewss</h4>
                                <h5>Address:</h5>
                                <h5>Hours Open:</h5>
                                <h5>Phone:</h5>
                                <h5>Pictures</h5>
                            </div>
                        </div>
                    </div>

                    <div id="column2" class="col-md-8">

                        <div id="map" class="align-self-stretch">
                            <div id="map-display" class="w-100 shadow-lg rounded">
                                ${embeddedMap}
                            </div>
                        </div>

                        <div id="info-bar" class="align-self-center">
                            <div id="yelp-display" class="w-100 shadow-lg rounded">
                                <br>
                                <br>
                                <br>
                                <h4>Phase 3: Yelp Infobar | div id for javascript targeting: #yelp-display</h4>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        `)
    })

    $("carousel-inner").append($(`<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
</a>`))
}