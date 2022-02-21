export type RegisterEmitProps = {
  func: (data: any) => void;
  type: string;
};

let events: Record<RegisterEmitProps['type'], RegisterEmitProps['func']> = {};

export const NUI = {
  registerEmit: (type: string, func: (data: any) => void) => {
    events[type] = func;
  },
};

export const EventListener = () => {
  window.addEventListener("message", (e) => {
    if (!events[e.data.type]) return;
    events[e.data.type](e.data);
  });
  
  return null;
}
