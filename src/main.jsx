// Code: Main entry point for the React application. This file is responsible for rendering the App component and attaching it to the root element in the HTML document. 

// Import the necessary modules from the react and react-dom packages. 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Render the App component in the root element of the HTML document. 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
