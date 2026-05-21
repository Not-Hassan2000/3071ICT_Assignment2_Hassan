import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#efefef',
    padding: 10,
  },

  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4da6d9',
  },

  splashText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
  },

  header: {
    backgroundColor: '#4da6d9',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
  },

  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },

  productImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 5,
  },

  detailImage: {
    width: '100%',
    height: 220,
    marginBottom: 10,
  },

  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  priceText: {
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },

  button: {
    backgroundColor: '#2d73d5',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    minWidth: 120,
  },

  smallButton: {
    backgroundColor: '#2d73d5',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 8,
    width: 45,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    alignItems: 'center',
  },

  descriptionHeader: {
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  authContainer: {
    backgroundColor: '#4c43b8',
    padding: 15,
    borderRadius: 5,
    marginTop: 100,
  },

  authTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },

  inputLabel: {
    color: '#fff',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 12,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },

  toggleText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 12,
  },

  profileText: {
    marginVertical: 10,
    fontWeight: 'bold',
  },

  orderHeader: {
    backgroundColor: '#7ebd5b',
    padding: 8,
    borderRadius: 4,
    marginBottom: 5,
    alignItems: 'center',
  },

  orderHeaderText: {
    fontWeight: 'bold',
    color: '#000',
  },

  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },

  orderItemContainer: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 8,
    marginTop: 8,
    borderRadius: 4,
  },

  quantityText: {
    fontWeight: 'bold',
    marginTop: 5,
  },
});