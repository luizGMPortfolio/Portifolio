import React from 'react'
import About from '../routes/About.jsx'
import Skills from '../routes/Skills.jsx'
import Jorney from '../routes/Jorney.jsx'
import Project from '../routes/Project'
import { Route, Routes} from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

function AnimateRoutes() {
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' exact element={<About />} />
                <Route path='/Skills' element={<Skills />} />
                <Route path='/Jorney' element={<Jorney />} />
                <Route path='/Project' element={<Project />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimateRoutes