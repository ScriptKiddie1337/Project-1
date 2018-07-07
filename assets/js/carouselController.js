function addCarsouselItems(placeIds, details, gifs) {

    $(".carousel-inner").empty()

    let embeddedMaps = generateMapsFromIds(placeIds)

    embeddedMaps.forEach(function (embeddedMap, index) {

        let active = ""
        let page = (index + 1)
        let pages = placeIds.length

        if (index == 0) {
            active = "active"
        }

        let userReview1 = ""
        let userReview2 = ""

        if (details[index].reviews[0]) {
            userReview1 = `<div class="gcolumn px-1">
            <div class="starcontainer">
                <span class="googlestars inactive">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </span>
                <span class="googlestars active" style="width: ${details[index].reviews[0].rating * 20}%">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </span>
            </div>
            <h5>
                <span class="googleReviewName">${details[index].reviews[0].author_name}</span>
            </h5>
            <p>
                <span class="googleReviewDescription">${details[index].reviews[0].text}</span>
            </p>
        </div>`
        }

        if (details[index].reviews[1]) {
            userReview2 = `<div class="gcolumn px-1">
            <div class="starcontainer">
                <span class="googlestars inactive">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </span>
                <span class="googlestars active" style="width: ${details[index].reviews[1].rating * 20}%">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </span>
            </div>
            <h5>
                <span class="googleReviewName">${details[index].reviews[1].author_name}</span>
            </h5>
            <p>
                <span class="googleReviewDescription">${details[index].reviews[1].text}</span>
            </p>
        </div>`
        }

        $(".carousel-inner").append(
            `<div class="carousel-item ${active} page-container">
        <div class="row"> <!--Inner Carousel-->
            <div class="col-md-4 d-flex flex-column">
                    <div class="shadow-md rounded px-4 bgWhite">
                        <span class="biz-gif justify-content-center">
                            <iframe src="${gifs[index]}" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        </span>
                        <h3>
                            <u>
                                <span class="biz-name">${details[index].name}</span>
                            </u>
                        </h3>
                        <h6>
                            result ${page} of ${pages}
                        </h6>
                        <hr>
                        <div class="d-flex flex-row">
                        ${userReview1}
                        ${userReview2}
                        </div>
                        <hr>
                        <h6>
                            <span class="biz-address">
                                <i class="fas fa-map-pin"></i> Address: ${details[index].formatted_address}</span>
                        </h6>
                        <h6>
                            <span class="biz-phone">
                                <i class="fas fa-phone"></i> Phone: ${details[index].formatted_phone_number}</span>
                        </h6>
                    </div>
            </div>

            <div class="col-md-8 d-flex flex-column">
                <div id="map" class="align-self-stretch rounded">
                    <div id="map-display" class="shadow-md rounded">
                        ${embeddedMap}
                    </div>
                </div>
                        
            </div>

        </div> <!--Carousel Inner Row Div-->
    </div>`)
    })

    $(".carousel-inner").append(`<!--Carousel Slider buttons-->
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>`)

    $(".loading-indicator").css("visibility", "hidden")
}