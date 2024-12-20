import { Route, Routes } from 'react-router'
import { Footer } from './components/footer/footer.tsx'
import { Header } from './components/header/header.tsx'
import Contacts from './pages/Contacts.tsx'
import Home from './pages/Home.tsx'
import Photos from './pages/Photos.tsx'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/photos" element={<Photos />} />
        {/* TODO: Implement comments Route */}
      </Routes>
      <Footer />
    </>
  )
}
