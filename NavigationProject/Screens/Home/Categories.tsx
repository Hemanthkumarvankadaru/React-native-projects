import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Mock data for a professional retail layout
const CATEGORIES_DATA = [
  { id: '1', title: 'Electronics', count: '124 Items', },
  { id: '2', title: 'Fashion & Apparel', count: '450 Items', },
  { id: '3', title: 'Home & Kitchen', count: '89 Items',  },
  { id: '4', title: 'Beauty & Wellness', count: '210 Items',  },
  { id: '5', title: 'Books & Stationery', count: '95 Items',  },
  { id: '6', title: 'Sports & Outdoors', count: '132 Items',  },
];

function Categories() {
  const navigation = useNavigation<any>();

  const renderCategoryItem = ({ item }: { item: typeof CATEGORIES_DATA[0] }) => (
    <TouchableOpacity 
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('CategoryDetails', { categoryId: item.id, categoryName: item.title })}
    >
      <View style={styles.cardLeft}>
        <View>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>{item.count}</Text>
        </View>
      </View>
      <Text style={styles.arrowIcon}>-/</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* categories grid */}
      <FlatList
        data={CATEGORIES_DATA}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.cartButton}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.cartButtonText}> Go to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', 
  },
  header: {
    backgroundColor: '#FF6F00',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF', 
    letterSpacing: 0.5,
  },
  listContainer: {
    padding: 16,
    paddingBottom: 100, 
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2, 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    fontSize: 28,
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121', 
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#757575',
  },
  arrowIcon: {
    fontSize: 16,
    color: '#FF6F00',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    padding: 16,
  },
  cartButton: {
    backgroundColor: '#FF6F00',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#FF6F00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  cartButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default Categories;
