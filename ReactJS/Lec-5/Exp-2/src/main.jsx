import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GitHub from './Components/GitHub.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <GitHub usernaam="variskhan7"/>
    <GitHub usernaam= "shivamtyagi295"/>
    <GitHub usernaam="abhishek-aky"/>
  </StrictMode>,
)
