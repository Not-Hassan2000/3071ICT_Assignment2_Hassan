import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity,} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
} from '../redux/cartSlice';
import styles from '../components/style';

export default function CartScreen() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your shopping cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Items: {totalItems} | Total: ${totalCost.toFixed(2)}
        </Text>
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.productImage}
              resizeMode="contain"
            />

            <Text numberOfLines={2}>{item.title}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Quantity: {item.quantity}</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.smallButton}
                onPress={() => dispatch(decreaseQuantity(item.id))}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.smallButton}
                onPress={() => dispatch(increaseQuantity(item.id))}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}