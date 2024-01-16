import './App.css'
import Header from './components/Header.jsx'
import { BrowserRouter as Router} from 'react-router-dom'
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
