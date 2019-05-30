import axios from 'axios'


export default class DriverService {

    constructor(){
        const BASE_URL = "https://ergast.com/api/f1/";
        this.url = `${BASE_URL}drivers/`
    }

    get(driverId){
        return axios.get(`${this.url}${driverId}.json`)
            .then(res => res.data['MRData']['DriverTable']['Drivers'][0])
    }
}