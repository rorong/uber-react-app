import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { RideProvider } from './contexts/RideContext';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <AuthProvider>
      <RideProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RideProvider>
    </AuthProvider>
  </ErrorBoundary>
);

