import React, { useReducer } from 'react';
import { AppContext, initialState } from './context';
import { contextReducer } from './reducers';

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
