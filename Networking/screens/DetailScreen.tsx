import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

const ViewDetailsModal = ({ visible, product, onClose }) => {
  if (!product) return null;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image
            source={{ uri: product.thumbnail }}
            style={styles.modalImage}
          />

          <Text style={styles.title}>{product.title}</Text>
          <Text>Price: ${product.price}</Text>
          <Text>Quantity: {product.quantity}</Text>
          <Text>Total: ${product.total}</Text>
          <Text>Discount: {product.discountPercentage}%</Text>
          <Text>Discounted Total: ${product.discountedTotal}</Text>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default function DetailScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/carts');
      const data = await response.json();

      const allProducts = data.carts.reduce((acc, cart) => {
        return [...acc, ...cart.products];
      }, []);
      console.log(allProducts);

      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (item) => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => openModal(item)}
          >
            <Image
              source={{ uri: item.thumbnail }}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>Price: ${item.price}</Text>
              <Text>Quantity: {item.quantity}</Text>
              <Text>Total: ${item.total}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <ViewDetailsModal
        visible={modalVisible}
        product={selectedProduct}
        onClose={closeModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 1,
    marginRight: 10,
  },

  info: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },

  modalImage: {
    width: 180,
    height: 180,
    marginBottom: 15,
    borderRadius: 10,
  },

  closeButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
  },
});