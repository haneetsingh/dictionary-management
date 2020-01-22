import React, { useState, useEffect } from 'react';
import useModal from '../hooks/useModal';

import Modal from './Modal';
import AddDictionary from './AddDictionary';
import ViewAllDictionaries from './ViewAllDictionaries';

const Home = () => {
  const [data, setData] = useState([]);
  const { isShowing, showModal, hideModal } = useModal();

  useEffect(() => {
    const dictionaries = JSON.parse(localStorage.getItem('dictionaries')) || [];
    setData(dictionaries);
  }, []);

  return (
    <div className="container">
      <h1 className="page-heading text-center">
        Welcome to Dictionary Management
      </h1>

      <div className="actions">
        <button className="btn btn-primary" onClick={showModal}>
          Add new dictionary
        </button>
      </div>

      <ViewAllDictionaries items={data} />

      <Modal
        isShowing={isShowing}
        onClose={hideModal}
        title='Add new dictionary'
        component={AddDictionary}
      />
    </div>
  )
}
export default Home;