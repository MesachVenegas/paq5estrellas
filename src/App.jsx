import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SocialBar, Navbar, Footer } from './components/Index';
import Zips from './pages/Zips/Zips';
import Home from './pages/Home/Home';
import Track from './pages/Rastreo/Track';
import Quotes from './pages/Quotes/Quotes';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <SocialBar />
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/zips' element={<Zips />} />
          <Route path='/track' element={<Track />} />
          <Route path='/quote' element={<Quotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
