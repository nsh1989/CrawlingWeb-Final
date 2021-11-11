import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/api"

class service {
    getBoards() {
        console.log(axios.get(BOARD_API_BASE_URL));
        return axios.get(BOARD_API_BASE_URL);
    }
    getBrands() {
        const url =  BOARD_API_BASE_URL + "/getBrandlist";
        console.log(axios.get(url));
        return axios.get(url);
    }
    getModels(brand) {
        const url =  BOARD_API_BASE_URL + "/getModellist";
        return axios.get(url, {
            params :{
                manufacturer : brand
            }});
    }
}
export default new service();