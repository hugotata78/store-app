import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Headers from './components/Headers/Index';
import 'boxicons';
import Routes from './Routes';
import { DataProvider } from './Context/DataProvider';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Headers />
          <Cart />
          <Routes />
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
