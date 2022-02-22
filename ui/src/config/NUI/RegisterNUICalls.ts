import { NUI } from "./NUIHandler";
import { useAppDataDispatch } from "src/contexts/appDataProvider";

export const RegisterAllNUIs = () => {
  const dispatch = useAppDataDispatch();
  
  NUI.registerEmit("toggle", () => {
    dispatch({ type: 'TOGGLE' });
  });
}
