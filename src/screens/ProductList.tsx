import { StyleSheet, View, FlatList, Pressable } from "react-native";
import React from "react";
import useGetProductsList from "../hooks/useGetProductsList";
import Product from "../components/Product";
import Loader from "../components/Loader";

interface Props {
  navigation: any;
}

const ProductList: React.FC<Props> = ({ navigation }) => {
  const { products, productsLoading } = useGetProductsList();

  const renderProduct = (product: Product) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate("ProductDetails", { id: product.id })
        }
      >
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          imageUrl={product.images?.[0]?.original}
        />
      </Pressable>
    );
  };

  return (
    <>
      {productsLoading ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(product) => renderProduct(product.item)}
            initialNumToRender={10}
          />
        </View>
      )}
    </>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
});
