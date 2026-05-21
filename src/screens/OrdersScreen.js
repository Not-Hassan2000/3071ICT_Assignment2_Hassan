import React, { useState } from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  markPaid,
  markDelivered,
} from '../redux/orderSlice';

import styles from '../components/style';

export default function OrdersScreen() {
  const orders = useSelector(
    (state) => state.orders.orders
  );

  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(null);

  const renderOrder = ({ item }) => {
    const total = item.items.reduce(
      (sum, product) =>
        sum + product.price * product.quantity,
      0
    );

    return (
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() =>
            setExpanded(
              expanded === item.id
                ? null
                : item.id
            )
          }
        >
          <View style={styles.orderRow}>
            <Text>
              Order ID: {item.id}
            </Text>

            <Text>
              Items: {item.items.length}
            </Text>

            <Text>
              Total: ${total.toFixed(2)}
            </Text>
          </View>
        </TouchableOpacity>

        {expanded === item.id && (
          <>
            {item.items.map((product) => (
              <View
                key={product.id}
                style={styles.orderItemContainer}
              >
                <Image
                  source={{
                    uri: product.image,
                  }}
                  style={styles.productImage}
                />

                <Text numberOfLines={2}>
                  {product.title}
                </Text>

                <Text style={styles.quantityText}>
                  Quantity: {product.quantity}
                </Text>
              </View>
            ))}

            {item.status === 'new' && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  dispatch(markPaid(item.id));

                  Alert.alert(
                    'Success',
                    'Order Paid'
                  );
                }}
              >
                <Text style={styles.buttonText}>
                  Pay
                </Text>
              </TouchableOpacity>
            )}

            {item.status === 'paid' && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  dispatch(
                    markDelivered(item.id)
                  );

                  Alert.alert(
                    'Success',
                    'Order Delivered'
                  );
                }}
              >
                <Text style={styles.buttonText}>
                  Receive
                </Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    );
  };

  const newOrders = orders.filter(
    (item) => item.status === 'new'
  );

  const paidOrders = orders.filter(
    (item) => item.status === 'paid'
  );

  const deliveredOrders = orders.filter(
    (item) => item.status === 'delivered'
  );

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          My Orders
        </Text>
      </View>

      <View style={styles.orderHeader}>
        <Text style={styles.orderHeaderText}>
          New Orders: {newOrders.length}
        </Text>
      </View>

      <FlatList
        data={newOrders}
        renderItem={renderOrder}
      />

      <View style={styles.orderHeader}>
        <Text style={styles.orderHeaderText}>
          Paid Orders: {paidOrders.length}
        </Text>
      </View>

      <FlatList
        data={paidOrders}
        renderItem={renderOrder}
      />

      <View style={styles.orderHeader}>
        <Text style={styles.orderHeaderText}>
          Delivered Orders:
          {' '}
          {deliveredOrders.length}
        </Text>
      </View>

      <FlatList
        data={deliveredOrders}
        renderItem={renderOrder}
      />
    </View>
  );
}