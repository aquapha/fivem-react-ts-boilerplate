export type AppContextState = {
  toggle?: boolean;
}

export type AppContextActions = {
  type: 'TOGGLE',
} | {
  type: 'ON'
} | {
  type: 'OFF',
}
