import React, { useEffect } from 'react';

import {
  View,
  Text,
} from 'react-native';

import styles from '../components/style';

export default function SplashScreen({
  navigation,
}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 3000);
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Text style={styles.splashText}>
        Fake Store
      </Text>
    </View>
  );
}