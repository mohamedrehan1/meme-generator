import React from "react";
import ReactDOMClient from 'react-dom/client';
import App from "./App";
import "./index.css";


// Create a root.
const root = ReactDOMClient.createRoot(document.getElementById('root'));

// Initial render: Render an element to the root.
root.render(  
  <div>
    <App />
  </div>
);