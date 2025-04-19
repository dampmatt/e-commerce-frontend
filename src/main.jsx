import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { store } from './store/store.js'
import {Provider} from 'react-redux'

const router= createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        // path: '/',
        // element: <App/>,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
