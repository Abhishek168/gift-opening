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
							<div className='my-2 mx-5'>
								<img
									src='https://c.tenor.com/NUgGe4MQpPsAAAAi/wontae-hiper-rabbit.gif'
									alt='rabbit HBD'
									height='340px'
								/>
							</div>
						</div>
					</div>
					<div className='cardInside'>
						<h3 className='back'>Happy b'day Babloo Escobar 💗!</h3>
						<p>
							Today I get to wish someone who has the most beautiful soul of
							anybody I know a very happy birthday! . You are the most beautiful
							golu Moluu Kidd in the world.
						</p>
						<p>
							Wishing you the very happiest birthday with all my love and lots
							of big kisses! 😘
						</p>
						<p>
							Near or far, I’m really lucky to have you in my life, sweetie 💞.
						</p>
						<div className='mt-1'>
							<Link to='cake'>
								<button className='mt-5 border-0'>
									Wanna see your cake?🎂
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default WelcomeCard
