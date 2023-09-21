import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SocialBar, Navbar, Footer} from './components/Index';
import Zips from './pages/Zips/Zips';
import Home from './pages/Home/Home';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <SocialBar />
      <Navbar />
      <main>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/zips' element={<Zips />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
