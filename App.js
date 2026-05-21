import React from 'react';
import { Alert } from 'react-native';

import { Provider, useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import store from './src/redux/store';

import SplashScreen from './src/screens/SplashScreen';
import AuthScreen from './src/screens/AuthScreen';
import Category from './src/screens/Category';
import ProductList from './src/screens/ProductList';
import ProductDetail from './src/screens/ProductDetail';
import CartScreen from './src/screens/CartScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import ProfileScreen from './src/screens/ProfileScreen';

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

function Tabs() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const orders = useSelector((state) => state.orders.orders);

  const totalCartItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const newOrders = orders.filter(
    (item) => item.status === 'new'
  ).length;

  const protectedScreen = (Component) => {
    return loggedIn
      ? Component
      : () => {
          Alert.alert('Login Required');
          return <AuthScreen />;
        };
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Account') {
            iconName = 'person';
          } else if (route.name === 'Products') {
            iconName = 'storefront';
          } else if (route.name === 'My Cart') {
            iconName = 'cart';
          } else if (route.name === 'My Orders') {
            iconName = 'receipt';
          } else if (route.name === 'Profile') {
            iconName = 'person-circle';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Account"
        component={AuthScreen}
      />

      <Tab.Screen
        name="Products"
        component={protectedScreen(ProductStack)}
      />

      <Tab.Screen
        name="My Cart"
        component={protectedScreen(CartScreen)}
        options={{
          tabBarBadge:
            totalCartItems > 0
              ? totalCartItems
              : null,
        }}
      />

      <Tab.Screen
        name="My Orders"
        component={protectedScreen(OrdersScreen)}
        options={{
          tabBarBadge:
            newOrders > 0
              ? newOrders
              : null,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={protectedScreen(ProfileScreen)}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
          />

          <Stack.Screen
            name="Main"
            component={Tabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}