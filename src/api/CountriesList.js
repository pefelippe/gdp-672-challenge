
// returns a dictionary with all API countries, with 'CountryCode' being the dictionary key

const url = "https://api.covid19api.com/countries"

function sortDict(unorderedDict) {
    const orderedDict = {};
    Object.keys(unorderedDict).sort().forEach(function (key) {
        orderedDict[key] = unorderedDict[key];
    });
    return orderedDict
}

export default async function CountriesList(setCountriesDict) {
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            let countries = {};
            data.map(country => (
                countries[country.ISO2] = country.Country
            ));
            setCountriesDict(sortDict(countries));
        });
}