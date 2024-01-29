import { useEffect, useState } from "react";
import { getAllProducts } from "../api/utils";

const useGetProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);

  useEffect(() => {
    setProductsLoading(true);
    getAllProducts()
      .then((response) => {
        setProducts(response?.data?.items);
      })
      .finally(() => {
        setProductsLoading(false);
      });
  }, []);

  return { products, productsLoading };
};

export default useGetProductsList;
