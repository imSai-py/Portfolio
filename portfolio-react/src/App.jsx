import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackgroundMesh from './components/BackgroundMesh'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorksPage from './pages/WorksPage'
import ContactPage from './pages/ContactPage'
import ResumePage from './pages/ResumePage'
import WorkDetailPage from './pages/WorkDetailPage'

function App() {
  return (
    <>
      <BackgroundMesh />
      <Navbar />
      <main className="relative z-[1]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/work/:id" element={<WorkDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
