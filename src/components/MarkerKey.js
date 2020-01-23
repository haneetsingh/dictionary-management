import React from 'react';

const MarkerKey = () => (
  <>
    <div className="label">Marker Severity (high to low)</div>
    <ul className="inline-list">
      <li className="inline-list--item inline-list--item-cycle">Cycle</li>
      <li className="inline-list--item inline-list--item-chain">Chain</li>
      <li className="inline-list--item inline-list--item-duplicate">Duplicate</li>
      <li className="inline-list--item inline-list--item-fork">Fork</li>
    </ul>
  </>
)

export default MarkerKey;
