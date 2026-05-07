import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import styles from '../components/style';

export default function ProductList({ route, navigation }) {
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{category.toUpperCase()}</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { productId: item.id })}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text numberOfLines={2}>{item.title}</Text>
            <Text style={styles.priceText}>Price: ${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}