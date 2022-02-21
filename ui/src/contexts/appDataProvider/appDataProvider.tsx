import type {
  AppContextActions,
  AppContextState,
} from "./appDataProvider.types";

import { Dispatch, FC, useReducer } from "react";
import { createContext, useContext } from "react";

const InitialState = {
  toggle: process.env.NODE_ENV === 'production' ? false : true,
}

const AppDataContext = createContext<AppContextState>(null!);
const AppDataDispatch = createContext<Dispatch<AppContextActions>>(null!);

function AppDataReducer(
  state: AppContextState,
  action: AppContextActions,
): AppContextState {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        toggle: !state.toggle,
      };
    case 'ON':
      return {
        ...state,
        toggle: true,
      };
    case 'OFF':
      return {
        ...state,
        toggle: false,
      };
    default:
      return state;
  }
}

export function useAppData() {
  const ctx = useContext(AppDataContext);

  if (!ctx) {
    throw new Error('Using app data context outside provider');
  }

  return ctx;
}

export function useAppDataDispatch() {
  const ctx = useContext(AppDataDispatch);

  if (!ctx) {
    throw new Error('Using app data dispatch outside provider');
  }

  return ctx;
}

export const AppDataProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppDataReducer, InitialState);

  return (
    <AppDataDispatch.Provider value={dispatch}>
      <AppDataContext.Provider value={state}>
        {children}
      </AppDataContext.Provider>
    </AppDataDispatch.Provider>
  )
}
