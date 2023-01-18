async function getData() {
	var result = await fetch(
		"https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e"
	)
	return result.json();
}

getData().then(function (result) {
	var table = document.getElementById("container-data");

	result.map(function (exchangeRateRow) {
		table.innerHTML +=
			'<tr>' +
			'<td>' + exchangeRateRow.country + '</td>' +
			'<td>' + exchangeRateRow.name + '</td>' +
			'<td>' + exchangeRateRow.shortName + '</td>' +
			'<td>' + exchangeRateRow.valBuy + '</td>' +
			'<td>' + exchangeRateRow.valMid + '</td>' +
			'<td>' + exchangeRateRow.valSell + '</td>' +
			'<td>' + exchangeRateRow.cnbMid + '</td>' +
			'<td>' +
			'<a href="/detail.html?shortName=' + exchangeRateRow.shortName + '" class="detail-btn"><i class="fa fa-question-circle" aria-hidden="true"></i></a>' +
			'</td>' +
			'</tr>';
	});
});