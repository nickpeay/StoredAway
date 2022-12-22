import React, { useReducer } from 'react';
import { contextReducer, AppProvider, initialState } from './context/context';

import AppContainer from './components/AppContainer';

export default function App() {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  return (
    <AppProvider value={[state, dispatch]}>
      <AppContainer />
    </AppProvider>
  );
}
