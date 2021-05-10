import { axiosClient } from './config.service';

class ProductsService {
  // Jobs
  static listProducts() {
    // return fetchData(query);
    let url = `/items`;
    return axiosClient.get(url);
  }
 

}
export default ProductsService;