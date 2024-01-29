import axios from "axios";

const Authorization = "1009c1a351683ae69c8d6f54d94fb898";
const StoreID = "2";
const UserAddressID = "49769";

export const getAllProducts = async () => {
  const data = await axios.post<Product[]>(
    "https://staging-api.manoapp.com/api/v1/users/products",
    {},
    {
      headers: {
        Authentication: Authorization,
        StoreID,
        UserAddressID,
      },
    }
  );
  return data?.data;
};

export const getProductById = async (id: number) => {
  const data = await axios.get<Product>(
    `https://staging-api.manoapp.com/api/v1/users/products/${id}`,
    {
      headers: {
        Authentication: Authorization,
        StoreID,
        UserAddressID,
      },
    }
  );
  return data?.data;
};
