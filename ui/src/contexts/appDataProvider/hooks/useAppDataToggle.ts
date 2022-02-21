import { useAppData } from '../appDataProvider';

export function useAppDataToggle() {
  const ctx = useAppData();

  if (!ctx) {
    throw new Error('Using app data dispatch outside provider');
  }

  return ctx.toggle;
};
