import { useState } from 'react';

const useModal = () => {
  const [isShowing, setShowing] = useState(false);

  const showModal = () => setShowing(true);
  const hideModal = () => setShowing(false);

  return {
    isShowing,
    showModal,
    hideModal
  }
};

export default useModal;