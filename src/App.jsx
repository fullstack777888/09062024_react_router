import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Flights from './pages/flights'
import Register from './pages/register'
import Navbar from './pages/navbar'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: '/',
          element: <Flights />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    }

    // {
    //   path: '/',
    //   element: <Flights />
    // },
    // {
    //   path: 'register',
    //   element: <Register />
    // }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
