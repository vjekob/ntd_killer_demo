import React from 'react';
import { StateStore } from './redux/StateStore';
import { Provider } from "react-redux";
import Root from './Root';

export default function App() {
  return (
    <Provider store={StateStore}>
      <Root />
    </Provider>
  );
}
