import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const mockApiData = [
        { id: '#ORD-9843', date: 'June 22, 2026', total: '$142.00', status: 'Delivered' },
        { id: '#ORD-9721', date: 'June 18, 2026', total: '$45.50', status: 'Delivered' },
        { id: '#ORD-9550', date: 'June 12, 2026', total: '$210.00', status: 'Processing' },
        
        { id: '#ORD-4550', date: 'June 12, 2026', total: '$210.00', status: 'Processing' },
        
        { id: '#ORD-9450', date: 'June 12, 2026', total: '$210.00', status: 'Processing' },
        
        { id: '#ORD-8550', date: 'June 12, 2026', total: '$210.00', status: 'Processing' },
    ];
      setOrders(mockApiData);
      setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#FF7F2A" />
        <Text style={styles.loadingText}>Loading orders...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>My Orders</Text>
        <Text style={styles.subtitle}>Track and view your account purchase history</Text>
      </View>

      {/* orders list  */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {orders.map((item) => (
          <View key={item?.id} style={styles.orderCard}>
            
            {/* order id , status badge */}
            <View style={styles.cardRow}>
              <Text style={styles.orderId}>{item.id}</Text>
              <View style={[
                styles.statusBadge, 
                item?.status === 'Processing' && styles.processingBadge
              ]}>
                <Text style={[
                  styles.statusText,
                  item.status === 'Processing' && styles.processingText
                ]}>
                  {item.status}
                </Text>
              </View>
            </View>

            {/* separate line */}
            <View style={styles.divider} />

            <View style={styles.cardRow}>
              <View>
                <Text style={styles.label}>Date Placed</Text>
                <Text style={styles.value}>{item.date}</Text>
              </View>
              <View style={styles.rightAlign}>
                <Text style={styles.label}>Total Amount</Text>
                <Text style={styles.priceValue}>{item.total}</Text>
              </View>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 24,
    paddingTop: 0,
  },
  centerContent: {
    justifyContent: 'center',

    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    color: '#64748B',
    fontSize: 14,
    fontWeight: '500',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    color: '#0F172A',
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  subtitle: {
    color: '#64748B',
    fontSize: 14,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#0F172A',
    shadowRadius: 10,
    elevation: 2,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderId: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '700',
  },
  statusBadge: {
    backgroundColor: '#ECFDF5', // Soft Green for Delivered
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99,
  },
  statusText: {
    color: '#059669', 
    fontSize: 12,
    fontWeight: '700',
  },
  processingBadge: {
    backgroundColor: '#edbf88', 
  },
  processingText: {
    color: '#D97706',
  },
  divider: {
    height: 2,
    backgroundColor: '#c79a1d',
    marginVertical: 15,
  },
  label: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 2,
  },
  value: {
    color: '#334155',
    fontSize: 14,
    fontWeight: '600',
  },
  rightAlign: {
    alignItems: 'flex-end',
  },
  priceValue: {
    color: '#FF7F2A', 
    fontSize: 15,
    fontWeight: '700',
  },
});

export default Orders;
