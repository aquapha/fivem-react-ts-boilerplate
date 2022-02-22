export type AppContextState = {
  closing?: boolean;
  toggle?: boolean;
}

export type AppContextActions = {
  type: 'TOGGLE',
} | {
  type: 'ON'
} | {
  type: 'OFF',
}
