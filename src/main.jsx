import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Routes, Route, RouterProvider } from 'react-router'
import './index.scss'

import App from './App.jsx'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'projet/:id', Component: Project },
      { path: 'info', Component: About },
      { path: '/*', Component: Error }
    ],
  },
])

// createRoutesFromElements(
//   <Route path='/' element={<App />} errorElement={<Error />}>
//     <Route index element={<Home />} />
//     <Route path='projet/:id' element={<Project />} />
//     <Route path='info' element={<About />} />
//   </Route>
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
