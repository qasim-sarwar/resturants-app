import axios from "axios";

componentDidMount(); {
	var self = this;
	axios
	.get("https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=f4f4d088e687deb9&large_area=Z011&course=ramen", {
		"Content-Type": "application/xml; charset=utf-8"
	 })
	.then(function(response) {
		self.setState({ resturants: response.data });
	})
	.catch(function(error) {
		console.log(error);
	});
}

