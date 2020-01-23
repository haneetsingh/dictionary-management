import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useModal from '../hooks/useModal';
import useItems from '../hooks/useItems';
import useDictionaries from '../hooks/useDictionaries';

import Modal from './Modal';
import DeleteConfirmation from './DeleteConfirmation';
import ViewDictionaryItems from './ViewDictionaryItems';
import MarkerKey from './MarkerKey';

const DictionaryItem = (props) => {
  const { dictionaryId } = props.match.params;
  const { dictionaryItems, removeItem, validateItems } = useItems(dictionaryId);
  const { dictionaries, removeDictionary } = useDictionaries();
  const { isShowing, showModal, hideModal } = useModal();
  const [currentDictionaryItem, setCurrentDictionaryItem] = useState({});

  useEffect(() => {
    const filterItem = dictionaries.filter(item => item.id == dictionaryId);
    setCurrentDictionaryItem(filterItem);
  }, [dictionaries]);

  return (
    <div className="container">
      <h1 className="page-heading">{ currentDictionaryItem[0] && `Dictionary ${currentDictionaryItem[0]['name']}`}</h1>

      <div className="actions">
        <Link
          to={`/dictionary/${dictionaryId}/add`}
          className="btn btn-primary"
        >
          Add items
        </Link>
        <Link to={`/dictionary/${dictionaryId}/edit`} className="btn btn-primary">
          Edit Dictionary
        </Link>
        <a className="btn btn-primary" onClick={showModal}>
          Delete Dictionary
        </a>
      </div>

      <MarkerKey />

      <ViewDictionaryItems
        items={dictionaryItems}
        onDelete={removeItem}
        validate={validateItems}
      />

      <Modal
        isShowing={isShowing}
        onClose={hideModal}
        title="Delete dictionary"
        text="Are you sure you want to delete this dictionary. This will remove all the items for this dictionary."
        id={dictionaryId}
        deleteItem={removeDictionary}
        closeSelf={false}
        component={DeleteConfirmation}
      />
    </div>
  )
}

export default DictionaryItem
