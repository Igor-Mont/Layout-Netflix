import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
