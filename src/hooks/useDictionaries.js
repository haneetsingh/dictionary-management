// custom hook for managing dictionaries in localstor
import { useState } from 'react';
import { history } from '../helpers/history';

const getDictionaries = () => {
  return JSON.parse(localStorage.getItem('dictionaries')) || [];
}

const getDictionaryItems = () => {
  return JSON.parse(localStorage.getItem('dictionaryItems')) || [];
}

const useDictionaries = () => {
  const [dictionaries, setDictionaries] = useState(() => getDictionaries());
  const [dictionaryItems, setDictionaryItems] = useState(() => getDictionaryItems());

  const updateDictionaryItems = updatedItems => {
    localStorage.setItem('dictionaryItems', JSON.stringify(updatedItems));
    setDictionaryItems(updatedItems);
  }

  const updateDictionaries = newDictionaries => {
    localStorage.setItem('dictionaries', JSON.stringify(newDictionaries));
    setDictionaries(newDictionaries);
  }

  const addDictionary = newItem => {
    updateDictionaries([...dictionaries, newItem]);
  }

  const removeDictionary = id => {
    const newDictionaries = dictionaries.filter(dictionary => !(dictionary.id == id));
    const updatedItems = dictionaryItems.filter(item => !(item.dictionary === id));

    updateDictionaryItems(updatedItems);
    updateDictionaries(newDictionaries);
    history.push('/');
  }

  return { dictionaries, addDictionary, updateDictionaries, removeDictionary };
}

export default useDictionaries;
