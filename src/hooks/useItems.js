// custom hook for managing dictionary entries in localstorage
import { useState, useEffect } from 'react';
import validateDictionary from '../helpers/validateDictionary';

const getAllItems = () => {
  return JSON.parse(localStorage.getItem('dictionaryItems')) || [];
}

const useItems = (dictionaryId) => {
  const [items, setItems] = useState(() => getAllItems());

  const [dictionaryItems, setDictionaryItems] = useState([]);
  useEffect(() => {
    const filteredItems = items.filter(item => item.dictionary === dictionaryId);
    setDictionaryItems(filteredItems);
  }, [items]);

  const updateItems = newItems => {
    localStorage.setItem('dictionaryItems', JSON.stringify(newItems));
    setItems(newItems);
  }

  const addItem = newItem => {
    updateItems([...items, newItem]);
  }

  const removeItem = id => {
    const newItems = items.filter(item => item.id !== id);
    updateItems(newItems);
  }

  const validateItems = (itemsToValidate) => {
    validateDictionary(itemsToValidate);
    updateItems(items);
  }

  return {
    items,
    dictionaryItems,
    addItem,
    updateItems,
    removeItem,
    validateItems
  };
}

export default useItems;
