import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const MOCK_CART_ITEMS = [
  { id: '1', name: 'Premium Leather Wallet', price: 1299, quantity: 1, category: 'Accessories' },
  { id: '2', name: 'Wireless Mouse', price: 500, quantity: 2, category: 'Electronics' },
  { id: '3', name: 'Minimalist Ceramic Mug', price: 450, quantity: 1, category: 'Lifestyle' },
  { id: '4', name: 'Ceramic Mug', price: 450, quantity: 1, category: 'Lifestyle' },
  { id: '5', name: 'Mug', price: 450, quantity: 1, category: 'Lifestyle' },
];

function Cart() {
  const navigation = useNavigation<any>();
  const [cartItems, setCartItems] = useState(MOCK_CART_ITEMS);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  
  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyCard}>
            <Text style={styles.cardText}>Your cart is empty</Text>
            <Text style={styles.cardSubtitle}>Add items to start shopping</Text>
          </View>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Products')}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Go to Products</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Active Cart List View
        <View style={styles.flexOne}>
          <ScrollView style={styles.listContainer} contentContainerStyle={styles.scrollPadding}>
            {cartItems.map((item) => (
              <View key={item.id} style={styles.cartCard}>    
                <View style={styles.cardContent}>
                  <View style={styles.itemHeaderRow}>
                    <Text style={styles.itemCategory}>{item.category.toUpperCase()}</Text>
                    <TouchableOpacity onPress={() => removeItem(item.id)}>
                      <Text style={styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                  
                  <Text style={styles.itemName}>{item.name}</Text>
                  
                  <View style={styles.priceRow}>
                    <Text style={styles.itemPrice}>₹{item.price * item.quantity}</Text>
                  
                    <View style={styles.quantityContainer}>
                      <Text style={styles.quantityText}>{item.quantity}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Order Summary  */}
          <View style={styles.footerSummary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal ({totalItems} items):</Text>
              <Text style={styles.summaryValue}>₹{totalPrice}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Charges:</Text>
              <Text style={[styles.summaryValue, styles.freeText]}>FREE</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Total Amount:</Text>
              <Text style={styles.totalValue}>₹{totalPrice}</Text>
            </View>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('Products')}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>Continue Shopping</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigation.navigate('PaymentScreen', { totalItems, totalPrice })}
              activeOpacity={0.8}
            >
              <Text style={styles.primaryButtonText}>Proceed To CheckOut</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  flexOne: { flex: 1 },
  emptyContainer: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'space-between' 
  },
  emptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    marginTop: 20,
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardText: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#333333', 
    marginBottom: 4 
  },
  cardSubtitle: { 
    fontSize: 14, 
    color: '#666666' 
  },

  listContainer: { 
    flex: 1, 
    backgroundColor: '#FCFCFC' 
  },
  scrollPadding: { 
    padding: 20, 
    paddingBottom: 10 
  },
  cartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 3,
  },
  cardContent: { 
    flex: 1, 
    padding: 16 
  },
  itemHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  itemCategory: { 
    fontSize: 10, 
    fontWeight: '700', 
    color: '#FF6F00', 
    letterSpacing: 1, 
  },
  removeText: {
    fontSize: 12,
    color: '#FF3B30',
    fontWeight: '600',
  },
  itemName: { 
    fontSize: 16,
    fontWeight: '600', 
    color: '#333333', 
    marginBottom: 12 
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemPrice: { fontSize: 16, fontWeight: '700', color: '#111111' },
  
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 2,
  },
  quantityButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    elevation: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6F00',
  },
  quantityText: {
    marginHorizontal: 14,
    fontSize: 14,
    fontWeight: '700',
    color: '#333333',
  },

  footerSummary: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 4,
  },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  summaryLabel: { color: '#777777', fontSize: 14 },
  summaryValue: { color: '#333333', fontSize: 14, fontWeight: '500' },
  freeText: { color: '#2E7D32', fontWeight: '700' },
  divider: { height: 1, backgroundColor: '#EEEEEE', marginVertical: 10 },
  totalLabel: { fontSize: 16, fontWeight: '700', color: '#222222' },
  totalValue: { fontSize: 20, fontWeight: '800', color: '#FF6F00' },

  primaryButton: {
    backgroundColor: '#FF6F00',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    elevation: 3,
    shadowColor: '#FF6F00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  primaryButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700', letterSpacing: 0.5 },
  
  secondaryButton: {
    borderColor: '#FF6F00',
    borderWidth: 1.5,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  secondaryButtonText: { color: '#FF6F00', fontSize: 15, fontWeight: '700', letterSpacing: 0.5 },
});

export default Cart;
