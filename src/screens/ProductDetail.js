import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import styles from '../components/style';

export default function ProductDetail({ route, navigation }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Product Details</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: product.image }}
          style={styles.detailImage}
          resizeMode="contain"
        />

        <Text style={styles.detailTitle}>{product.title}</Text>
        <Text>Rate: {product.rating?.rate}</Text>
        <Text>Count: {product.rating?.count}</Text>
        <Text style={styles.priceText}>Price: ${product.price}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(addToCart(product))}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.descriptionHeader}>Description:</Text>
        <Text>{product.description}</Text>
      </View>
    </ScrollView>
  );
}