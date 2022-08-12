import axios from "axios";

class DataService {
  async getCatalog() {
    console.log("loading catalog")
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    return response.data;
  }
  async getCoupons() {
    console.log("calling server");

    let response = await axios.get("http://127.0.0.1:5000/api/couponCodes");
    console.log("retrieved", response.data);
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
