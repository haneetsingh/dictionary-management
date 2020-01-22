import React from 'react';
import { Link } from 'react-router-dom';

const ViewAllDictionaries = ({ items }) => (
  <>
    <h2>Dictionaries</h2>
    { items.length > 0 ?
      items.map(item => (
        <h4 className="dictionary-item" key={item.id}>
          <Link to={`/dictionary/${item.id}`}>{item.name}</Link>
        </h4>
      ))
      :
      <p>No dictionary to display.</p>
    }
  </>
);

export default ViewAllDictionaries
