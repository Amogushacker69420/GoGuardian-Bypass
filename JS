function resetEmbed() {
	document.getElementById("embed-container").innerHTML = "";
	document.getElementById("website-input").value = "";
}

document.getElementById("embed-form").addEventListener("submit", function(event) {
	event.preventDefault();
	var websiteUrl = document.getElementById("website-input").value;
	if (!websiteUrl.startsWith("http://") && !websiteUrl.startsWith("https://")) {
		websiteUrl = "https://" + websiteUrl;
	}

	var embedHtml = '<object data="' + websiteUrl + '" type="text/html" width="100%" height="500px"></object>';
	document.getElementById("embed-container").innerHTML = embedHtml;
});
