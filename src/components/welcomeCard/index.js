import { Link } from 'react-router-dom'
import './styles.css'

const WelcomeCard = () => {
	return (
		<>
			<div className='cardWrapper'>
				<div className='birthdayCard'>
					<div className='cardFront'>
						<h3 className='happy'>HAPPY BIRTHDAY Frnd!</h3>
						<div className='balloons'>
							<div className='balloonOne' />
							<div className='balloonTwo' />
							<div className='balloonThree' />
							<div className='balloonFour' />
							<div className='balloonOne' />
							<div className='balloonTwo' />
							<div className='balloonThree' />
							<div className='balloonFour' />
						</div>
					</div>
					<div className='cardInside'>
						<h3 className='back'>HAPPY BIRTHDAY Doolo!</h3>
						<p>Dear Friend,</p>
						<p>
							Happy birthday!! I hope your day is filled with lots of love and
							laughter! May all of your birthday wishes come true.
						</p>
						<p className='name'>Pawan</p>
						<div className=''>
							<Link to='cake'>
								<button className=''>Click here 🎂</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default WelcomeCard
