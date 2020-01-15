import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import validateDictionary from '../helpers/validateDictionary';

const ViewAllItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('dictionary')) || [];
    validateDictionary(items);
    setData(items);
  }, []);

  const handleDelete = id => {
    const newItems = data.filter(item => item !== data[id]);
    validateDictionary(newItems);
    setData(newItems);
  }

  return (
    <>
      <h1 className="page-heading text-center">All Dictionary Items</h1>
      <section>
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
                  { data.map((item, idx) => (
                    <tr
                      key={`${idx}_${new Date().getTime()}`}
                      className={ item.problem && item.problem.toLowerCase() }
                    >
                      <td data-label="Domain">{item.domain}</td>
                      <td data-label="Range">{item.range}</td>
                      <td data-label="Edit">
                        <Link to={`/edit/${idx}`}>Edit</Link>
                      </td>
                      <td data-label="Delete">
                        <a onClick={() => handleDelete(idx)}>Delete</a>
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
    </>
  );
}

export default ViewAllItems;
