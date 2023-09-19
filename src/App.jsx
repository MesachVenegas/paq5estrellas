import { SocialBar, Navbar, Carousel } from './components/Index';
import { slider1, slider3, slider4, slider5 } from './assets';
import './App.css'

function App() {
  const imgs = [slider1, slider3, slider4, slider5];

  return (
    <>
      <SocialBar />
      <Navbar />
      <main>
        <Carousel images={imgs} />
      </main>
    </>
  )
}

export default App
