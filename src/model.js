import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'todos';

export const loadTodos = async () => {
  try {
    const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.log('Error loading todos:', error);
    return [];
  }
};

export const saveTodos = async (todos) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.log('Error saving todos:', error);
  }
};