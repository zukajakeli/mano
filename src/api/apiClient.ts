import axios from "axios";

const Authorization = "1009c1a351683ae69c8d6f54d94fb898";
const StoreID = "2";
const UserAddressID = "49769";

axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = Authorization;
    // config.headers["StoreID"] = StoreID;
    // config.headers["UserAddressID"] = UserAddressID;

    return config;
  }
  // (error) => {
  //   return Promise.reject(error);
  // }
);
