import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './Components/Hello.jsx'
import Hye from './Components/Hye.jsx'
// import Aatankawadi from './Components/ello.jsx'
import {GLA} from './Components/GLA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Hello/>
    {/* <ello></ello> */}
    {/* <Badmashi/> */}
    {/* <Aatankawadi/> */}
    <GLA/>
  </StrictMode>,
)
