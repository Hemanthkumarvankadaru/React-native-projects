import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Button } from 'react-native';
const SearchScreen = () => {
  const navigation  = useNavigation();
    return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="View Cart"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};

export default SearchScreen;