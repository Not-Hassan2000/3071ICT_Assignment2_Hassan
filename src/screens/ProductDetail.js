import React, { useEffect, useState } from 'react';
import {
  View, Text, ActivityIndicator,
  Image, ScrollView, TouchableOpacity
} from 'react-native';
import styles from '../components/style';

export default function ProductDetail({ route, navigation }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Product Details</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: product.image }}
          style={{ width: '100%', height: 250 }}
          resizeMode="contain"
        />

        <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>
          {product.title}
        </Text>

        <Text>Rate: {product.rating?.rate}</Text>
        <Text>Count: {product.rating?.count}</Text>

        <Text style={{ fontWeight: 'bold' }}>
          Price: ${product.price}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Description:</Text>
        <Text>{product.description}</Text>
      </View>
    </ScrollView>
  );
}