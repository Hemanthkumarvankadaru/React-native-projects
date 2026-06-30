import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

// Mock Data for the Wishlist Items
const INITIAL_WISHLIST = [
  {
    id: '1',
    name: 'Wireless Noise-Canceling Headphones',
    price: '₹14,999',
    oldPrice: '₹19,999',
    image: 'https://unsplash.com',
    inStock: true,
  },
  {
    id: '2',
    name: 'Minimalist Leather Wristwatch',
    price: '₹6,499',
    oldPrice: '₹8,000',
    image: 'https://unsplash.com',
    inStock: true,
  },
  {
    id: '3',
    name: 'Running Sports Shoes - Orange/White',
    price: '₹4,200',
    oldPrice: '₹5,500',
    image: 'https://unsplash.com',
    inStock: false, // Out of stock example
  },
];

const WishList = () => {
  const [wishlist, setWishlist] = useState(INITIAL_WISHLIST);

  const removeItem = (id:String) => {
    setWishlist(prevList => prevList.filter(item => item.id !== id));
  };

  const renderItem = ({ item }:any) => (
    <View style={styles.card}>
      {/* Product Image */}
      <View  style={styles.image} ><Text style={styles.imgText}>Image</Text></View>
      
      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>
          {item.name}
        </Text>
        
        {/* Pricing */}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.oldPrice}>{item.oldPrice}</Text>
        </View>

        {/* Stock Status */}
        <Text style={[styles.stockText, !item.inStock && styles.outOfStockText]}>
          {item.inStock ? 'In Stock' : 'Out of Stock'}
        </Text>

        {/* Actions Row */}
        <View style={styles.actionsContainer}>
          {/* Add to Cart Button */}
          <TouchableOpacity 
            style={[styles.addToCartButton, !item.inStock && styles.disabledButton]}
            disabled={!item.inStock}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>

          {/* remove button */}
          <TouchableOpacity 
            style={styles.removeButton} 
            onPress={() => removeItem(item.id)}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Area */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Wishlist</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{wishlist.length}</Text>
        </View>
      </View>

      {/* Main List */}
      {wishlist.length > 0 ? (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your wishlist is empty!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  badge: {
    backgroundColor: '#FF6F00', 
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 12,
    marginLeft: 10,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  listContainer: {
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderColor: '#daa710',
    elevation: 4,
  },
  image: {
    width: 100,
    borderRadius: 4,
    height:150,
    backgroundColor: '#70e01a',
    justifyContent:'center',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6F00', 
  },
  oldPrice: {
    fontSize: 13,
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  stockText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2E7D32', 
    marginTop: 4,
  },
  outOfStockText: {
    color: '#C62828', 
  },
  actionsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: '#FF6F00',
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: 12,
    paddingHorizontal:8,
  },
  disabledButton: {
    backgroundColor: 'lightgrey',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  removeButton: {
    paddingVertical: 8,
  },
  removeButtonText: {
    color: '#757575',
    fontSize: 13,
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888888',
  },
  imgText:{
    paddingLeft:20,
    fontSize:20,
    
  }
});

export default WishList;
