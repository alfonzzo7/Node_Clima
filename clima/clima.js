const axios = require('axios');

const clima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d926c962aaf1eb7bc0d481cc49d9a471`);

    if (!resp.data.main) {
        throw new Error(`Ha ocurrido un error`);
    }

    return resp.data.main.temp;
}

module.exports = {
    clima
}