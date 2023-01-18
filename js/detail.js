async function getData() {
    var result = await fetch(
        "https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e"
    );

    return result.json();
}

var urlParam = new URLSearchParams(window.location.search);

getData().then(function (result) {
    result.map(function (rate) {
        if (rate.shortName === urlParam.get("shortName")) {
            var flag = document.getElementById("flag");
            flag.innerHTML =
                '<img crossorigin="anonymous" width="200" height="auto" src="https://countryflagsapi.com/svg/' +
                rate.country.toLowerCase() +
                '" alt="' +
                rate.country +
                '"/>';

            var tableCash = document.getElementById("detail-cash");
            var tableNonCash = document.getElementById("detail-non-cash");

            document.getElementById('heading').innerHTML = 'Detail of ' + rate.country;
            document.getElementById('short-name').innerHTML = 'Currency shortcut: ' + '<span>' + rate.shortName + '</span>';
            document.getElementById('name').innerHTML = 'Currency name: ' + '<span>' + rate.name + '</span>';
            document.getElementById('country').innerHTML = 'Country: ' + '<span>' + rate.country + '</span>';

            var moveColor;
            if (rate.move > 0) {
                moveColor = 'limegreen';
            } else if (rate.move < 0) {
                moveColor = "#fc6665";
            } else {
                moveColor = "#e3c06d";
            }

            document.getElementById('move').innerHTML = 'Move: ' + '<span style="color: ' + moveColor + '">' + rate.move + '</span>';

            var date = new Date(rate.validFrom);
            var validFrom = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
            document.getElementById('valid-date').innerHTML = 'Valid from: ' + '<span>' + validFrom + '</span>';

            tableCash.innerHTML +=
                '<tr>' +
                '<td>' + rate.valBuy + "</td>" +
                '<td>' + rate.valMid + "</td>" +
                '<td>' + rate.valSell + "</td>" +
                "</tr>";

            tableNonCash.innerHTML +=
                '<tr>' +
                '<td>' + rate.currBuy + "</td>" +
                '<td>' + rate.currMid + "</td>" +
                '<td>' + rate.currSell + "</td>" +
                "</tr>";
        }
    });
});
