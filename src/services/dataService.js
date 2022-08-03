import axios from "axios";

class DataService {
    async getCatalog(){
        let response = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;
}
}

export default DataService;