import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

window.MyWidget = {
  init: ({ containerId, siteId }) => {
    const container = document.getElementById(containerId);
    if (container) {
      const root = ReactDOM.createRoot(container);
      root.render(<App siteId={siteId} />);
    } else {
      console.error(`Container with ID "${containerId}" not found.`);
    }
  },
};