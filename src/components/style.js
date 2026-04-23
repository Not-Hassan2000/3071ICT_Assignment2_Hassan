import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  header: {
    backgroundColor: '#4da6d9',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#4da6d9',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});