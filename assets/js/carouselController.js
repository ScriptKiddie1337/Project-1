function addCarsouselItems(placeIds, details, gifs) {

    $(".carousel-inner").empty()

    let embeddedMaps = generateMapsFromIds(placeIds)

    embeddedMaps.forEach(function (embeddedMap, index) {

        let active = ""
        let page = ""
        if (index == 0) {
            active = "active"
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
        }

        $(".carousel-inner").append(`

            <div class="carousel-item ${active} page-container">
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

						<div id="column2" class="col-md-8">

							<div id="map" class="align-self-stretch">
								<div id="map-display" class="w-100 shadow-lg rounded">
                                ${embeddedMap}
								</div>
							</div>

							<div id="info-bar" class="align-self-center">
								<div id="yelp-display" class="w-100 shadow-lg rounded">
									<div class="row">
										<div class="col-sm-10">
											<div class="card-header rounded" id="yelpheader"></div>
										</div>
										<div class="col-sm-2">
											<button type="button" class="btn btn-danger mx-1" id="moreGoogleReviews">More Reviews</button>
										</div>
									</div>
									<div class="row p-1">
										<div class="sol-sm-4 p-1">
											<div class="starcontainer">
												<span class="yelpstars">
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
												</span>
											</div>
											<h5>
												<span class="yelpReviewName">yelp Reviewer Name</span>
											</h5>
											<p>
												<span class="yelpReviewDescription">Review Description</span>
											</p>
										</div>
										<div class="sol-sm-4 p-1">
											<div class="starcontainer">
												<span class="yelpstars">
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
												</span>
											</div>
											<h5>
												<span class="yelpReviewName">yelp Reviewer Name</span>
											</h5>
											<p>
												<span class="yelpReviewDescription">Review Description</span>
											</p>
										</div>
										<div class="sol-sm-4 p-1">
											<div class="starcontainer">
												<span class="yelpstars">
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
												</span>
											</div>
											<h5>
												<span class="yelpReviewName">yelp Reviewer Name</span>
											</h5>
											<p>
												<span class="yelpReviewDescription">Review Description</span>
											</p>
										</div>
										<div class="sol-sm-4 p-1">
											<div class="starcontainer">
												<span class="yelpstars">
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
												</span>
											</div>
											<h5>
												<span class="yelpReviewName">yelp Reviewer Name</span>
											</h5>
											<p>
												<span class="yelpReviewDescription">Review Description</span>
											</p>
										</div>
									</div>
								</div>
							</div>

						</div>

					</div>
				</div>
        `)
    })

    $(".carousel-inner").append(`<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
</a>`)
}