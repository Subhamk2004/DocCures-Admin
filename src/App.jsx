import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Router from "./Router"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

function App() {

  let router = createBrowserRouter([
    {
      path: '/',
      element: <Router />,
      children: [
        {
          path: '',
          element: <Login />
        },
        {
          path: 'dashboard',
          element: <Dashboard />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
