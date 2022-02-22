import { css } from '@emotion/css';
import Axios from './config/axios/Axios';
import { useEffect, useState } from 'react';
import { appear, disappear } from './styles/keyframes';
import { RegisterAllNUIs } from "./config/NUI/RegisterNUICalls";
import { useAppDataDispatch, useAppDataToggle } from "./contexts/appDataProvider";

export const App = () => {
  const [closing, setClosing] = useState(false); 
  const dispatch = useAppDataDispatch();

  RegisterAllNUIs();

  const toggle = useAppDataToggle();

  /**
   * * NUI Closing functionality.
   */

  useEffect(() => {
    const handleCloseOnKeyEvent = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setClosing(true);
        Axios.post('close');

        setTimeout(() => {
          dispatch({ type: 'OFF' });
          setClosing(false);
        }, 300);
      }
    };

    window.addEventListener('keydown', handleCloseOnKeyEvent);
    return () => window.removeEventListener('keydown', handleCloseOnKeyEvent);
  }, [dispatch]);

  const handleClose = () => {
    setClosing(true);
    Axios.post('close');

    setTimeout(() => {
      dispatch({ type: 'OFF' });
      setClosing(false);
    }, 300);
  };

  return (
    <>
      {toggle &&
        <div
          className={css`
            animation: ${closing ? disappear : appear};
            color: white;
          `}
        >
          NUI TEST
        </div>
      }
    </>
  );
};

export default App;
