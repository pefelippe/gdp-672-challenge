
// returns an object with confirmed cases, deaths, and recovered

export default async function Api(countriesDict, countryCode, setCases, startDate, endDate) {

    let url = 'https://api.covid19api.com/world/total';

    let countryPicked;

    /// ARRUMAAAAAAAAAAAAAR
    // let startDate2 = "2020-01-01T00:00:00";

    // let endDate2 = "2020-11-08T00:00:00";

    if (countryCode !== "world") {
        countryPicked = countriesDict[countryCode]
        url = `https://api.covid19api.com/total/country/${countryPicked}?from=${startDate}Z&to=${endDate}Z`
    }

    await fetch(url)
        .then(response => response.json())
        .then(data => {
            try {
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