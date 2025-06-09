import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import CRMService from './pages/services/CRMService'

const Home = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <WhyChooseUs />
    </>
  )
}

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/crm" element={<CRMService />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App