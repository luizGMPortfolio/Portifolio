import './App.css'
import About from './routes/About.jsx'
import Skils from './routes/Skils.jsx'
import Jorney from './routes/Jorney.jsx'
import Project from './routes/Project'
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AnimateRoutes from './components/AnimateRoutes.jsx'


function App() {

  return (

    <div className="App">
      <Router>
        <Header />
        <AnimateRoutes />
      </Router>
    </div >

  )
}

export default App
