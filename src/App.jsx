import './App.css'
import { Link, NavLink } from 'react-router'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function App() {
  

  return (
    <div>
        <Header />
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default App
