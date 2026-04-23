import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Category from './src/screens/Category';
import ProductList from './src/screens/ProductList';
import ProductDetail from './src/screens/ProductDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Category} />
        <Stack.Screen name="Products" component={ProductList} />
        <Stack.Screen name="Details" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}