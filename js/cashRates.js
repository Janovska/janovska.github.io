async function getData() {
	var result = await fetch(
		"https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e"
	)
	return result.json();
}

getData().then(function (data) {
	data.map(function (rate) {
		var table = document.getElementById("cash-rates");

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
			'<td>' + rate.valBuy + "</td>" +
			'<td>' + rate.valMid + "</td>" +
			'<td>' + rate.valSell + "</td>" +
			'<td>' + '<span style="color: ' + moveColor + '">' + rate.move + '</span> <i class="' + moveIcon + ' aria-hidden="true"></i></td>' +
			"</tr>";
	});
});