import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cake from './components/Cake'
import GiftOpening from './components/GiftsOpening'
import GiftBoxJumpingAnimation from './components/GiftBoxJumpingAnimation'
import Music from './components/Sound'
import WelcomeCard from './components/welcomeCard'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<WelcomeCard />}></Route>
					<Route path='/cake' element={<Cake />}></Route>
					<Route
						path='/cake/jumpingGift'
						element={<GiftBoxJumpingAnimation />}
					></Route>
					<Route
						path='/cake/jumpingGift/gifts'
						element={<GiftOpening />}
					></Route>
					<Route path='/music' element={<Music />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
