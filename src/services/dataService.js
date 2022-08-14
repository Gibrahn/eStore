import axios from "axios";

class DataService {
  async getCatalog() {
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    console.log("getting catalog", response.data)
    return response.data;
  }
  async getCoupons() {
    let response = await axios.get("http://127.0.0.1:5000/api/couponCodes");
    return response.data;
  }

  async saveCoupon(coupon) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/couponCodes",
      coupon
    );
    return response.data;
  }

  async saveProduct(product) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/catalog",
      product
    );
    return response.data;
  }
}
export default DataService;
