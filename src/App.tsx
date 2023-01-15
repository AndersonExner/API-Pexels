import React from 'react'
import { GlobalStyle } from './globalstyle';
import { Home } from './pages/home'

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Home/>
    </React.Fragment>
  );
}

export default App;
