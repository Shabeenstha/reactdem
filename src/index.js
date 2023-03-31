import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

// Replace ReactDOM.render with ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
