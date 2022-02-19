import React from 'react';
import './App.css';
import AppProvider from './context/AppProvider';
import AppRoutes from './routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
