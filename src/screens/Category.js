import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '../components/style';

export default function Category({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Categories</Text>
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Products', { category: item })}
          >
            <Text style={{ textAlign: 'center' }}>{item.toUpperCase()}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}