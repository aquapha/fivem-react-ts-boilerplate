import { useEffect } from 'react';
import Axios from 'src/config/axios/Axios';
import { useAppDataDispatch } from '../contexts';

export function useCloseMenu() {
  const dispatch = useAppDataDispatch();

  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch({ type: 'OFF' });
        Axios.post('close')
      }
    };

    window.addEventListener('keydown', handleClose);
    return () => window.removeEventListener('keydown', handleClose);
  }, [dispatch]);
};
