import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useModal from '../hooks/useModal';
import validateDictionary from '../helpers/validateDictionary';

import Modal from './Modal';
import DeleteConfirmation from './DeleteConfirmation';

const ViewDictionaryItems = ({ items, onDelete, validate }) => {
  const [data, setData] = useState(items);
  const [id, setId] = useState(null)
  const { isShowing, showModal, hideModal } = useModal();

  useEffect(() => {
    setData(items);
    validate(items);
  }, [items]);

  const handleDelete = id => {
    setId(id);
    showModal();
  }

  return (
    <>
      <section>
        <h2>Dictionary Items</h2>
        { data.length > 0 ?
            <>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Domain</th>
                    <th scope="col">Range</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Markers</th>
                  </tr>
                </thead>
                <tbody>
                  { data.map(item => (
                    <tr
                      key={item.id}
                      className={ item.problem && item.problem.toLowerCase() }
                    >
                      <td data-label="Domain">{item.domain}</td>
                      <td data-label="Range">{item.range}</td>
                      <td data-label="Edit">
                        <Link to={`/item/${item.id}/edit`}>Edit</Link>
                      </td>
                      <td data-label="Delete">
                        <a onClick={() => handleDelete(item.id)}>Delete</a>
                      </td>
                      <td data-label="Markers">
                        { item.problem && item.problem }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          :
            <p>No items to display.</p>
        }
      </section>

      <Modal
        isShowing={isShowing}
        onClose={hideModal}
        title="Delete item"
        text="Are you sure you want to delete this item form dictionary."
        id={id}
        deleteItem={onDelete}
        closeSelf={true}
        component={DeleteConfirmation}
      />
    </>
  );
}

export default ViewDictionaryItems;
