import './App.css'


import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductsRequest } from './store/Slice/productSlice'



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsRequest())  // triggers saga
  }, [dispatch])

  return (
    <div>
        <Header />
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default App
