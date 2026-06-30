import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 52) / 2; // Dynamically calculates equal width for 2 columns with spacing

// Professional retail mock product dataset
const MOCK_PRODUCTS = [
  { id: '1', name: 'Premium Leather Wallet', price: 1299, category: 'Accessories', rating: '4.8 ★' },
  { id: '2', name: 'Wireless Mouse', price: 500, category: 'Electronics', rating: '4.5 ★' },
  { id: '3', name: 'Minimalist Ceramic Mug', price: 450, category: 'Lifestyle', rating: '4.2 ★' },
  { id: '4', name: 'Ceramic Mug Classic', price: 450, category: 'Lifestyle', rating: '4.0 ★' },
  { id: '5', name: 'Travel Thermos Mug', price: 450, category: 'Lifestyle', rating: '4.6 ★' },
  { id: '6', name: 'Ergonomic Keypad', price: 1899, category: 'Electronics', rating: '4.7 ★' },
];

function Products() {
  const navigation = useNavigation<any>();

  const handleAddToCart = (productName: string) => {

    console.log(`Added to cart: ${productName}`);
  };

  return (
    <View style={styles.container}>
      {/* Main Grid View Container */}
      <ScrollView style={styles.listContainer} contentContainerStyle={styles.scrollPadding}>
        <View style={styles.gridRow}>
          {MOCK_PRODUCTS.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <View style={styles.imagePlaceholder}>
                <Text>Image</Text>
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>{product.rating}</Text>
                </View>
              </View>

              {/* Product Info Block */}
              <View style={styles.cardInfo}>
                <Text style={styles.itemCategory}>{product.category.toUpperCase()}</Text>
                <Text style={styles.itemName} numberOfLines={2}>
                  {product.name}
                </Text>
                <Text style={styles.itemPrice}>₹{product.price}</Text>
              </View>

              {/* Add to Cart Footer Trigger */}
              <TouchableOpacity 
                style={styles.addToCartButton} 
                onPress={() => handleAddToCart(product.name)}
                activeOpacity={0.8}
              >
                <Text style={styles.addToCartText}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  listContainer: { 
    flex: 1, 
    backgroundColor: '#FCFCFC' 
  },
  scrollPadding: { 
    padding: 16,
    paddingBottom: 24 
  },

  gridRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: COLUMN_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 5,
    borderColor: '#cc5506',
    justifyContent: 'space-between',
  },
  imagePlaceholder: {
    height: 120,
    backgroundColor: '#5e77e8',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

  },
  ratingBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: '#FF6F00',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  ratingText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#fff',
  },
  cardInfo: {
    padding: 6,
    flex: 1,
  },
  itemCategory: { 
    fontSize: 12, 
    fontWeight: '700', 
    color: '#FF6F00', 
    letterSpacing: 0.8, 
    marginBottom: 4 
  },
  itemName: { 
    fontSize: 14,
    fontWeight: '600', 
    color: '#333333', 
    lineHeight: 18,
    height: 20, 
    marginBottom: 6,
  },
  itemPrice: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: '#FF6F00' 
  },
  addToCartButton: {
    backgroundColor: '#FF6F00',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});

export default Products;
