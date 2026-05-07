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
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  detailImage: {
    width: '100%',
    height: 250,
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  priceText: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#4da6d9',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    marginTop: 10,
  },
  smallButton: {
    backgroundColor: '#4da6d9',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
    minWidth: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  descriptionHeader: {
    marginTop: 15,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});