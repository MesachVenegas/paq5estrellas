import { HashRouter, Routes, Route } from 'react-router-dom';
import { SocialBar, Navbar, Footer } from './components/Index';
import Loader from './components/loader/Loader';
import { Suspense, lazy } from 'react';
import './App.css'

const Home = lazy(() => import('./pages/Home/Home'));
const Track = lazy(() => import('./pages/Track/Track'));
const Quotes = lazy(() => import('./pages/Quotes/Quotes'));
const About = lazy(() => import('./pages/about/About'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const Zips = lazy(() => import('./pages/Zips/Zips'));


function App() {

	return (
		<HashRouter>
				<SocialBar />
				<Navbar />
				<Suspense fallback={<Loader />}>
					<main>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/zips' element={<Zips />} />
							<Route path='/tracking' element={<Track />} />
							<Route path='/quote' element={<Quotes />} />
							<Route path='/about' element={<About />} />
							<Route path='/contact' element={<Contact />} />
						</Routes>
					</main>
				</Suspense>
				<Footer />
			</HashRouter>
	)
}

export default App
