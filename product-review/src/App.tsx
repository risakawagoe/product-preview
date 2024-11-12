import React from 'react';
import logo from './logo.svg';
import '@mantine/core/styles.css';
import './App.css';
import { ProductPreviewer } from './pages/product-preview';

function App() {
  return (
    <div className="App">
      <ProductPreviewer />
    </div>
  );
}

export default App;
