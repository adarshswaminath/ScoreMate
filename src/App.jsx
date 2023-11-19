import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import GradetoGPA from './Components/GradetoGPA'
import GPAtoCGPA from './Components/GPAtoCGPA'
import CGPAtoPersnt from './Components/CGPAtoPersnt'
function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/gpa' Component={GradetoGPA}/>
        <Route path='/cgpa' Component={GPAtoCGPA}/>
        <Route path='/persentage' Component={CGPAtoPersnt}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App