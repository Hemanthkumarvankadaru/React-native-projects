import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PAYMENT_METHODS = [
  { id: 'upi', title: 'UPI (GPay / PhonePe / Paytm)', description: 'Instant transfer via UPI app' },
  { id: 'card', title: 'Credit / Debit Card', description: 'Visa, Mastercard, RuPay accepted' },
  { id: 'netbanking', title: 'Net Banking', description: 'Secure transfer from your bank account' },
  { id: 'cod', title: 'Cash On Delivery (COD)', description: 'Pay with cash at your doorstep' },
];

const PaymentScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // Fallback defaults if the user opens the screen directly without routing params
  const { totalItems = 0, totalPrice = 0 } = route.params || {};
  const [selectedMethod, setSelectedMethod] = useState('upi');

  const handlePaymentProcessing = () => {
    Alert.alert(
      'Processing Payment',
      `payment  ₹${totalPrice} through ${selectedMethod.toUpperCase()}.`,
      [
        { 
          text: 'OK', 
          onPress: () => {
            console.log('Payment Completed');
            navigation.navigate('Cart')
            navigation.navigate('Products')
          } 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollPadding}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Order Overview</Text>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Basket Items:</Text>
            <Text style={styles.summaryValue}>{totalItems} Units</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Amount To Pay:</Text>
            <Text style={styles.summaryPrice}>₹{totalPrice}</Text>
          </View>
        </View>

        <Text style={styles.sectionHeading}>CHOOSE PAYMENT METHOD</Text>

        {/* Payment  List */}
        {PAYMENT_METHODS.map((method) => {
          const isSelected = selectedMethod === method.id;
          return (
            <TouchableOpacity
              key={method.id}
              style={[styles.methodCard, isSelected && styles.selectedMethodCard]}
              onPress={() => setSelectedMethod(method.id)}
              activeOpacity={0.8}
            >
              <View style={styles.radioRow}>
                <View style={[styles.radioCircle, isSelected && styles.radioCircleSelected]}>
                  {isSelected && <View style={styles.radioInnerCircle} />}
                </View>
                <View style={styles.methodInfo}>
                  <Text style={[styles.methodTitle, isSelected && styles.selectedMethodText]}>
                    {method.title}
                  </Text>
                  <Text style={styles.methodDescription}>{method.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/*  Payment Footer */}
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Text style={styles.footerLabel}>Total:</Text>
          <Text style={styles.footerPrice}>₹{totalPrice}</Text>
        </View>
        <TouchableOpacity 
          style={styles.payButton} 
          onPress={handlePaymentProcessing}
          activeOpacity={0.9}
        >
          <Text style={styles.payButtonText}>Pay Securely Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  scrollPadding: {
    padding: 20,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    elevation: 8,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    letterSpacing: 0.3,
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666666',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
  },
  summaryPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FF6F00',
  },

  sectionHeading: {
    fontSize: 12,
    fontWeight: '700',
    color: '#777777',
    letterSpacing: 1,
    marginBottom: 12,
    paddingLeft: 2,
  },

  methodCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#EFEFEF',
  },
  selectedMethodCard: {
    borderColor: '#FF6F00',
    backgroundColor: '#FFF9F5',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  radioCircleSelected: {
    borderColor: '#FF6F00',
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF6F00',
  },
  methodInfo: {
    flex: 1,
  },
  methodTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 2,
  },
  selectedMethodText: {
    color: '#FF6F00',
  },
  methodDescription: {
    fontSize: 13,
    color: '#777777',
  },

  // Persistent Action Footer Block
  footer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 4,
  },
  footerRow: {
    flexDirection: 'column',
  },
  footerLabel: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '600',
  },
  footerPrice: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FF6F00',
  },
  payButton: {
    backgroundColor: '#FF6F00',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#FF6F00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
