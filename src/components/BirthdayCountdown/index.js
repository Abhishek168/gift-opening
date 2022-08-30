import React from 'react'
import { Link } from 'react-router-dom'
import Music from '../Sound'
import './styles.css'

const BirthdayCountDown = () => {
	return (
		<>
			{(() => {
				const second = 1000,
					minute = second * 60,
					hour = minute * 60,
					day = hour * 24

				let birthday = 'Oct 26, 2022 00:00:00',
					countDown = new Date(birthday).getTime(),
					x = setInterval(() => {
						let now = new Date().getTime(),
							distance = countDown - now
						document.getElementById('days').innerText = Math.floor(
							distance / day,
						)
						document.getElementById('hours').innerText = Math.floor(
							(distance % day) / hour,
						)
						document.getElementById('minutes').innerText = Math.floor(
							(distance % hour) / minute,
						)
						document.getElementById('seconds').innerText = Math.floor(
							(distance % minute) / second,
						)

						//do something later when date is reached
						if (distance < 0) {
							let headline = document.getElementById('headline'),
								countdown = document.getElementById('countdown'),
								content = document.getElementById('content')

							headline.innerText = 'Happy Birthday!'
							countdown.style.display = 'none'
							content.style.display = 'block'

							clearInterval(x)
						}
						//seconds
					}, 0)
			})()}
			<div style={{ backgroundColor: 'pink', height: '100vh', width: '100vw' }}>
				<div className='container'>
					<h1 id='headline'>Countdown to birthday</h1>
					<div id='countdown'>
						<ul>
							<li>
								<span id='days'></span> days
							</li>
							<li>
								<span id='hours'></span> Hours
							</li>
							<li>
								<span id='minutes'></span> Minutes
							</li>
							<li>
								<span id='seconds'></span> Seconds
							</li>
						</ul>
					</div>
					<div id='content' className='emoji'>
						<span>
							<Link to='card'>
								<Music />
							</Link>
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default BirthdayCountDown
