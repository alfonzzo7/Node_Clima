const axios = require('axios');

const getLugar = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&language=es&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    // console.log(JSON.stringify(resp.data.results[0].formatted_address, undefined, 2));

    let data = resp.data.results[0];
    let cords = data.geometry.location;

    return {
        direccion: data.formatted_address,
        lat: cords.lat,
        lng: cords.lng
    }
}

module.exports = {
    getLugar
}