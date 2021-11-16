import axios from 'axios';

// const BOARD_API_BASE_URL = "http://localhost:8080/api"
const BOARD_API_BASE_URL = "/api"

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
    getSubModels(model) {
        const url = BOARD_API_BASE_URL + "/getSubModellist";
        return axios.get(url,{
            params:{
                model : model
            }
        });
    }
    getDetailModels(submodel) {
        const url = BOARD_API_BASE_URL + "/getDetailModellist";
        return axios.get(url,{
            params:{
                submodel : submodel
            }
        });
    }
    getYearModels(submodel, detailmodel) {
        const url = BOARD_API_BASE_URL + "/getYearModellist";
        return axios.get(url,{
            params:{
                submodel : submodel,
                detailmodel : detailmodel
            }
        });
    }
    getByFilters(brand, model, sumbModel,
                 detailModel, year, age, km,
                 kmParam, ageParam, pageIndex,
                 ecode
                 ) {
        const url = BOARD_API_BASE_URL + "/getByFilters";
        return axios.get(url,{
            params:{
                brand : brand,
                model : model,
                sumbModel : sumbModel,
                detailModel : detailModel,
                year : year,
                age : age,
                km : km,
                kmParam : kmParam,
                ageParam : ageParam,
                pageIndex : pageIndex,
                ecode : ecode
            }
        });
    }
}
export default new service();