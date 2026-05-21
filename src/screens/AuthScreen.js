import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useDispatch } from 'react-redux';

import { signIn } from '../redux/authSlice';

import styles from '../components/style';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    dispatch(
      signIn({
        name,
        email,
      })
    );

    Alert.alert(
      'Success',
      isLogin ? 'Signed In' : 'Account Created'
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>
          {isLogin
            ? 'Sign in with your email and password'
            : 'Sign up a new user'}
        </Text>

        {!isLogin && (
          <>
            <Text style={styles.inputLabel}>
              User Name
            </Text>

            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </>
        )}

        <Text style={styles.inputLabel}>
          Email
        </Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.inputLabel}>
          Password
        </Text>

        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setName('');
              setEmail('');
              setPassword('');
            }}
          >
            <Text style={styles.buttonText}>
              Clear
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => setIsLogin(!isLogin)}
        >
          <Text style={styles.toggleText}>
            {isLogin
              ? 'Switch to: sign up a new user'
              : 'Switch to: sign in with an existing user'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}