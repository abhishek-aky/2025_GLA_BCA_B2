import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './Components/Hello.jsx'
import Hye from './Components/Hye.jsx'
import LogIn from './Components/LogIn.jsx'
import Count from './Components/Count.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Hello/> */}
    {/* <Hye/> */}
    {/* <LogIn/> */}
    <Count/>
  </StrictMode>,
)
