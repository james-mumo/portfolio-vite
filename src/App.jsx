import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import HomePage from "./HomePage"
import SeeCv from "./components/SeeCv"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<SeeCv />} />
    
      </Routes>
    </Router>
  )
}

export default App
