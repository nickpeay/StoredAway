// import { Storage } from 'firebase-admin/lib/storage/storage';
import React, { createContext, useReducer } from 'react';
import { contextReducer } from './reducers';

const initialState = { containers: [] };

export const AppContext = createContext(initialState);

const mainReducer = ({ containers }, action) => {
  containers: contextReducer(containers, action);
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};
