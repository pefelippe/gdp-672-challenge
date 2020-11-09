
// returns an object with confirmed cases, deaths, and recovered

export default async function Api(countriesDict, countryCode, setCases, startDate, endDate) {

    let url = `https://api.covid19api.com/world/total`;

    let countryPicked;

    if (countryCode !== "world") {
        countryPicked = countriesDict[countryCode]
        url = `https://api.covid19api.com/country/${countryPicked}?from=${startDate}&to=${endDate}`
    }

    await fetch(url)
        .then(response => response.json())
        .then(data => {
            try {
                console.log(data)
                let cases;
                let lastData;
                if ((countryCode === "world")) {
                    lastData = data;
                    cases = {
                        TotalConfirmed: lastData.TotalConfirmed,
                        TotalDeaths: lastData.TotalDeaths,
                        TotalRecovered: lastData.TotalRecovered
                    }
                }
                else {
                    lastData = data[Object.keys(data)[Object.keys(data).length - 1]]
                    cases = {
                        TotalConfirmed: lastData.Confirmed,
                        TotalDeaths: lastData.Deaths,
                        TotalRecovered: lastData.Recovered
                    }
                }
                setCases(cases)
            }
            catch (error) {
                console.log(error)
            }
        });
}