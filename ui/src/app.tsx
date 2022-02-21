import { useCloseMenu } from './hooks'
import { useAppDataToggle } from "./contexts/appDataProvider";
import { RegisterAllNUIs } from "./config/NUI/RegisterNUICalls";

export const App = () => {
  RegisterAllNUIs();
  useCloseMenu();

  const toggle = useAppDataToggle();

  return (
    <>
      {toggle &&
        <>
          <div className="container">
            <h1 className="thanks-text">
              Thanks for choosing my React TS boilerplate!
            </h1>
          </div>
        </>
      }
    </>
  );
};

export default App;
