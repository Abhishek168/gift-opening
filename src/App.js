import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cake from './components/Cake'
import GiftOpening from './components/giftsOpening'
import WelcomeCard from './components/welcomeCard'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<WelcomeCard />}></Route>
					<Route path='/cake' element={<Cake />}></Route>
					<Route path='/cake/gifts' element={<GiftOpening />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
