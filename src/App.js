import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cake from './components/Cake'
import GiftOpening from './components/GiftsOpening'
import GiftBoxJumpingAnimation from './components/GiftBoxJumpingAnimation'
import Music from './components/Sound'
import WelcomeCard from './components/welcomeCard'
import MultipleImageGallery from './components/ImageGallery'
import BirthdayCountDown from './components/BirthdayCountdown'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<BirthdayCountDown />}></Route>
					<Route path='/card' element={<WelcomeCard />}></Route>
					<Route path='/card/cake' element={<Cake />}></Route>
					<Route
						path='/card/cake/jumpingGift'
						element={<GiftBoxJumpingAnimation />}
					></Route>
					<Route
						path='/card/cake/jumpingGift/gifts'
						element={<GiftOpening />}
					></Route>
					<Route path='/music' element={<Music />}></Route>
					<Route path='/card/cake/jumpingGift/gifts/gallery' element={<MultipleImageGallery />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
