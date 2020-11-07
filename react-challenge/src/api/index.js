import axios from 'axios'

const URL = "https://api.covid19api.com/countries";

export const fetchData = async () => {
    try {
        const response = await axios.get(url);
        return response
    }
    catch(error) {

    }
}
