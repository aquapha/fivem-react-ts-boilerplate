import axios from 'axios';
import { useEffect } from 'react';
import { useAppDataDispatch } from '../contexts';
import { RESOURCE_NAME } from 'src/utils/constants';

export function useCloseMenu() {
  const dispatch = useAppDataDispatch();

  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch({ type: 'OFF' });
        axios.post(`https://${RESOURCE_NAME}/close`);
      }
    };

    window.addEventListener('keydown', handleClose);
    return () => window.removeEventListener('keydown', handleClose);
  }, [dispatch]);
};
