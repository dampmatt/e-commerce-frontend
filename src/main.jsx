import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { store } from './store/store.js'
import {Provider} from 'react-redux'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/cart',
        element: <Cart/>,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
