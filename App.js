import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import store from './src/redux/store';
import Category from './src/screens/Category';
import ProductList from './src/screens/ProductList';
import ProductDetail from './src/screens/ProductDetail';
import CartScreen from './src/screens/CartScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Category} />
      <Stack.Screen name="Products" component={ProductList} />
      <Stack.Screen name="Details" component={ProductDetail} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  const totalQuantity = useSelector((state) =>
    state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Products') {
            iconName = 'storefront';
          } else if (route.name === 'Shopping Cart') {
            iconName = 'cart';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Products" component={ProductStack} />
      <Tab.Screen
        name="Shopping Cart"
        component={CartScreen}
        options={{
          tabBarBadge: totalQuantity > 0 ? totalQuantity : null,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}