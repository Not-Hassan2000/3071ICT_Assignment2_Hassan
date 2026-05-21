import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { signOut } from '../redux/authSlice';

import styles from '../components/style';

export default function ProfileScreen() {
  const user = useSelector(
    (state) => state.auth.user
  );

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          User Profile
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.profileText}>
          User Name: {user?.name}
        </Text>

        <Text style={styles.profileText}>
          Email: {user?.email}
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Update
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(signOut())}
          >
            <Text style={styles.buttonText}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}