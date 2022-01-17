import React, { createContext } from 'react';
import useAppHandler from '../hooks/useAppHandler';

export const AppDataContext = createContext();

const AppProvider = ({ children }) => {
  const AppContext = useAppHandler();
  return (
    <AppDataContext.Provider value={AppContext}>
      {children}
    </AppDataContext.Provider>
  );
};

export default AppProvider;
