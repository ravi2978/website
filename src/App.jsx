import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import OurFirm from './pages/OurFirm'
import MeetClaire from './pages/MeetClaire'
import ImmigrationLaw from './pages/ImmigrationLaw'
import FamilyLaw from './pages/FamilyLaw'
import Contact from './pages/Contact'
import Consultations from './pages/Consultations'
import News from './pages/News'
import NotFound from './pages/NotFound'

import FirmPhilosophy from './pages/subpages/FirmPhilosophy'
import Testimonials from './pages/subpages/Testimonials'
import Community from './pages/subpages/Community'
import ReferringAttorneys from './pages/subpages/ReferringAttorneys'
import Experience from './pages/subpages/Experience'
import Education from './pages/subpages/Education'
import Associations from './pages/subpages/Associations'
import Publications from './pages/subpages/Publications'
import Awards from './pages/subpages/Awards'
import DetainedIndividuals from './pages/subpages/DetainedIndividuals'
import IndividualsFamilies from './pages/subpages/IndividualsFamilies'
import Litigation from './pages/subpages/Litigation'
import Mediation from './pages/subpages/Mediation'
import Collaboration from './pages/subpages/Collaboration'
import ImmigrationResources from './pages/subpages/ImmigrationResources'
import FamilyLawResources from './pages/subpages/FamilyLawResources'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-firm" element={<OurFirm />} />
          <Route path="/our-firm/philosophy" element={<FirmPhilosophy />} />
          <Route path="/our-firm/testimonials" element={<Testimonials />} />
          <Route path="/our-firm/community" element={<Community />} />
          <Route path="/our-firm/referring-attorneys" element={<ReferringAttorneys />} />
          <Route path="/meet-claire" element={<MeetClaire />} />
          <Route path="/meet-claire/experience" element={<Experience />} />
          <Route path="/meet-claire/education" element={<Education />} />
          <Route path="/meet-claire/associations" element={<Associations />} />
          <Route path="/meet-claire/publications" element={<Publications />} />
          <Route path="/meet-claire/awards" element={<Awards />} />
          <Route path="/immigration-law" element={<ImmigrationLaw />} />
          <Route path="/immigration-law/detained-individuals" element={<DetainedIndividuals />} />
          <Route path="/immigration-law/individuals-families" element={<IndividualsFamilies />} />
          <Route path="/family-law" element={<FamilyLaw />} />
          <Route path="/family-law/litigation" element={<Litigation />} />
          <Route path="/family-law/mediation" element={<Mediation />} />
          <Route path="/family-law/collaboration" element={<Collaboration />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources/immigration" element={<ImmigrationResources />} />
          <Route path="/resources/family-law" element={<FamilyLawResources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
