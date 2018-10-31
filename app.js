const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Nombre de la ciudad y su país para obtener el clima'
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugar(argv.direccion);

        let temp = await clima.clima(coords.lat, coords.lng);

        return `El clima en ${coords.direccion} es de ${temp} grados centigrados`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));