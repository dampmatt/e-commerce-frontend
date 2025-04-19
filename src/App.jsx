import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
        <Header />
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default App
