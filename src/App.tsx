import React from 'react';
import { Provider } from 'react-redux';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { store } from './store';
import './styles/style.sass';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Content />
    </Provider>
  );
}

export default App;
