//connect react app to index html file 
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Create a root using createRoot and pass the container element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(<App />);