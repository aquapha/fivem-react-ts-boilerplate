import clsx from 'clsx';
import { css } from '@emotion/css';
import { X } from 'heroicons-react'; 
import Axios from './config/axios/Axios';
import { FC, useEffect, useState } from 'react';
import { appear, disappear } from './styles/keyframes';
import { modalColors, textColors } from './styles/colors';
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
        <>
          <div
            className={css`
              background-color: ${modalColors.light};
              animation: ${closing ? disappear : appear} 0.3s ease forwards;
              justify-content: space-between;
              flex-direction: column;
              position: relative;
              border-radius: 8px;
              display: flex;
              padding: 25px;
              gap: 10px;
            `}
          >
            <div
              className={css`
                justify-content: space-between;
                flex-direction: row;
                display: flex;
              `}
            >
              <h1
                className={css`
                  color: ${textColors.dark};
                  font-size: 24px;
                  width: 300px;
                `}
              >
                Thanks!
              </h1>
              <Button
                onClick={handleClose}
                extraCSS={css`
                  background-color: inherit;
                  border: 0px;
                `}
              >
                <X
                  className={css`
                    color: ${textColors.blue};
                  `}
                />
              </Button>
            </div>
            <p
              className={css`
                font-size: 18px;
                margin: 0 auto;
                width: 375px;
              `}
            >
              Thank you for choosing my React.TS + Emotion.JS boilerplate!
            </p>
            <div
              className={css`
                justify-content: flex-end;
                flex-direction: row;
                margin-top: 30px;
                display: flex;
              `}
            >
              <Button
                onClick={handleClose}
                extraCSS={css`
                  background-color: ${textColors.blue};
                  border-color: ${textColors.blue};
                  border-radius: 8px;
                  padding: 10px 20px;
                `}
              >
                Close
              </Button>
            </div>
          </div>
        </>
      }
    </>
  );
};

interface ButtonProps {
  onClick: () => void;
  extraCSS?: string;
}

const Button: FC<ButtonProps> = ({
  extraCSS,
  children,
  onClick,
}) => {
  const classes = clsx(
    css`
      width: fit-content;
      font-weight: 800;
      color: white;
    `,
    extraCSS
  )

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default App;
