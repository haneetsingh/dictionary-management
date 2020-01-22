import { useState, useEffect } from 'react';
import useDictionaries from './useDictionaries';

const getAllItems = () => {
  return JSON.parse(localStorage.getItem('dictionaryItems')) || [];
}

const useItems = (dictionaryId) => {
  const { dictionaries } = useDictionaries();
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

  return { items, dictionaryItems, addItem, updateItems, removeItem };
}

export default useItems;
