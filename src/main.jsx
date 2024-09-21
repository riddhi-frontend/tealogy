import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Outlet from './Outlet.jsx'
import Presence from './Presence.jsx'
import Apply from './Apply.jsx'
import Menu from './Menu.jsx' 
import Benefits from './Benefits.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/About-us' element={<About />}></Route>
      <Route path='/our-presence' element={<Presence />}></Route>
      <Route path='/menu' element={<Menu />}></Route>
      <Route path='/benefits' element={<Benefits />}></Route>
      <Route path='/outlets' element={<Outlet />}></Route>
      <Route path='/apply-now' element={<Apply />}></Route>
      </Routes>
      </Router>
  </React.StrictMode>,
)