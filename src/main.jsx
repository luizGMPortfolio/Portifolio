import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './routes/About.jsx'
import Skils from './routes/Skils.jsx'
import Jorney from './routes/Jorney.jsx'
import Background from './components/Background.jsx'
import Project from './routes/Project.jsx'
import { motion } from 'framer-motion'


const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/Skils",
    element: <Skils />,
  },
  {
    path: "/Jorney",
    element: <Jorney />,
  },
  {
    path: "/Project",
    element: <Project />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <Background />
      <App/>
    </React.StrictMode>,
)
