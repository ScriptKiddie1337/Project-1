<<<<<<< HEAD
function addCarsouselItems(placeIds) {
=======
function addCarsouselItems(placeIds, details, gifs) {
>>>>>>> master

    $(".carousel-inner").empty()

    let embeddedMaps = generateMapsFromIds(placeIds)

    embeddedMaps.forEach(function (embeddedMap, index) {

        let active = ""

        if (index == 0) {
            active = "active"
<<<<<<< HEAD
=======
        } else {
            page = "page " + (index + 1)
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
>>>>>>> master
        }

        $(".carousel-inner").append(`
            <div class="carousel-item ${active} page-container">
<<<<<<< HEAD
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
=======
					<div class="row justify-content-center">
						<div id="column1" class="col-md-4">
							<div id="top-10-bar" class="d-inline-flex p-2 w-100">
								<div id="gif-array" class="w-100 shadow-lg rounded">
									<span class="biz-gif">
										<iframe src="${gifs[index]}" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
									</span>
									<h3>
										<u>
											<span class="biz-name">${details[index].name} ${page}</span>
										</u>
									</h3>
									<hr>
									<div class="row">
                                        ${userReview1}
                                        ${userReview2}
									</div>
									<button type="button" class="btn btn-info btn-sm" id="moreGoogleReviews">. . .</button>
									<br>
									<small>See more Reviews From Google</small>
									<hr>
									<h5>
										<span class="biz-address">
											<i class="fas fa-map-pin"></i> Address: ${details[index].formatted_address}</span>
									</h5>
									<h5>
										<span class="biz-hours">
											<i class="fas fa-clock"></i> Hours Open:</span>
									</h5>
									<h5>
										<span class="biz-phone">
											<i class="fas fa-phone"></i> Phone: ${details[index].formatted_phone_number}</span>
									</h5>
								</div>
							</div>
						</div>
>>>>>>> master

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