import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ResumeProvider from './context api/ResumeContext.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ResumeProvider>

    <App />
  </ResumeProvider>
  </BrowserRouter>
  
  
)
