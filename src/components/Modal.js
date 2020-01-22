import React from 'react';

const Modal = ({ component: Component, isShowing, ...rest }) => {
  return (
    isShowing ?
    <>
      <div className="backdrop"></div>
      <div className="modal">
        <div  className="modal-header">
          <h3>{rest.title}</h3>
        </div>
        <div className="modal-body">
          <Component {...rest} />
        </div>
      </div>
    </>
    : null
  );
}

export default Modal;
