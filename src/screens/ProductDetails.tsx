import { StyleSheet, Text, View, Image, Pressable, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import ImageViewer from "react-native-image-zoom-viewer";
import { getProductById } from "../api/utils";

interface Props {
  route: any;
}

const ProductDetails: React.FC<Props> = ({ route }) => {
  const [productData, setProductData] = useState<Product | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);

  const { id } = route.params;
  const images = productData?.images?.map((image) => ({ url: image.large }));
  const imageUrl = productData?.images?.[0]?.large;

  useEffect(() => {
    id &&
      getProductById(id).then((res) => {
        setProductData(res?.data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setShowImageModal(true)}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </Pressable>
      <Text style={styles.name}>{productData.title}</Text>
      <Text style={styles.price}>${productData.price}</Text>
      <Modal visible={showImageModal} transparent={true}>
        <Pressable
          style={{
            position: "absolute",
            top: 50,
            right: 50,
            zIndex: 100,
          }}
          onPress={() => setShowImageModal(false)}
        >
          <Text>X</Text>
        </Pressable>

        <ImageViewer
          backgroundColor="white"
          onSwipeDown={() => setShowImageModal(false)}
          imageUrls={images}
        />
      </Modal>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});
