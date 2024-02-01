import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom

import App from './App';

// Use createRoot instead of ReactDOM.render
const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(<App />);
