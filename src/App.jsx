import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import CRMService from './pages/services/CRMService'
import HRService from './pages/services/HRService'
import TelecallingService from './pages/services/TelecallingService'
import DigitalMarketingService from './pages/services/DigitalMarketingService'
import AboutUs from './pages/AboutUs'
import ServicesPage from './pages/Services'
import Resources from './pages/Resources'

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
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/crm" element={<CRMService />} />
          <Route path="/services/hr" element={<HRService />} />
          <Route path="/services/telecalling" element={<TelecallingService />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingService />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App