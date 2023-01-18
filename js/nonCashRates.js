async function getData() {
	var result = await fetch(
		"https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e"
	);

	return result.json();
}

getData().then(function (result) {
	result.map(function (rate) {
		var table = document.getElementById("non-cash-rates");

		var moveColor;
		var moveIcon;
		if (rate.move > 0) {
			moveColor = "limegreen";
			moveIcon = "fa-solid fa-arrow-trend-up";
		} else if (rate.move < 0) {
			moveColor = "#fc6665";
			moveIcon = "fa-solid fa-arrow-trend-down";
		} else {
			moveColor = "#e3c06d";
		}


		table.innerHTML +=
			'<tr>' +
			'<td>' + rate.name + "</td>" +
			'<td>' + rate.shortName + "</td>" +
			'<td>' + rate.country + "</td>" +
			'<td>' + rate.currBuy + "</td>" +
			'<td>' + rate.currMid + "</td>" +
			'<td>' + rate.currSell + "</td>" +
			'<td>' + '<span style="color: ' + moveColor + '">' + rate.move + '</span> <i class="' + moveIcon + ' aria-hidden="true"></i></td>' +
			"</tr>";
	});
});