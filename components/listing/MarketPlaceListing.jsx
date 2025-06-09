import React from 'react';
import { FlatList, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { stores } from '../../utils/data';
import { Searchbar, Text } from 'react-native-paper';

const MarketPlaceListing = () => {
  const [filterStore, setFilterStore] = React.useState(stores);

  const handleSearch = (query) => {
    if (!query) {
      setFilterStore(stores);
      return;
    }
    const filtered = stores.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    setFilterStore(filtered.length ? filtered : stores);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={1} ellipsizeMode='tail'>
        {item.type}
      </Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Bid</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='Search'
        icon='magnify'
        clearIcon='close'
        onChangeText={handleSearch}
        style={{ backgroundColor: '#f5f5f5', elevation: 0, marginTop: 10 }}
      />
      <Text variant='headlineSmall' style={{ marginLeft: 12, fontWeight: 'bold', marginBlock: 20 }}>
        stores
      </Text>
      <FlatList
        data={filterStore}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2} // Display products in a grid
        columnWrapperStyle={styles.row} // Style the row for spacing
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    marginTop: 15,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  buyButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default MarketPlaceListing;
