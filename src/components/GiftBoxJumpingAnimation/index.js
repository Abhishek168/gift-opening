import React, { useReducer } from 'react'
import './styles.css'
import box from './images/box.png'
import boxLid from './images/box-lid.png'
import kuku from './images/jump-character.png'
import Confetti from './confetti/Confetti'
import { Link } from 'react-router-dom'

const init_state = {
	move: 'move',
	jump: '',
	rotated: '',
	rotating: '',
}
export default function GiftBoxJumpingAnimation() {
	const [state, setState] = useReducer(
		(state, new_state) => ({
			...state,
			...new_state,
		}),
		init_state,
	)

	const { move, rotating, rotated, jump } = state

	function animate() {
		let isDone = rotated === 'rotated' ? true : false

		if (!isDone) {
			setState({ rotating: 'rotating' })
			setTimeout(() => {
				setState({ jump: 'jump' })
			}, 300)
			setTimeout(() => {
				setState({ rotated: 'rotated' })
			}, 1000)
		} else {
			setState(init_state)
		}
		let moving = move === 'move' ? '' : 'move'
		setState({ move: moving })
	}

	return (
		<div className='jumping'>
			<div className='jumping-app'>
				<Confetti open={jump === 'jump'} />
				<div className='img-container'>
					<img className={`kuku ${jump}`} src={kuku} alt='kuku' />
					<button className='box-jump' onClick={() => animate()}>
						<img src={box} alt='box-jump' />
					</button>
					<img
						className={`lid ${move} ${rotating} ${rotated}`}
						src={boxLid}
						alt='box-lid'
					/>
				</div>
				<div style={{display:"flex",justifyContent:"end"}}>
					<Link to='gifts'>
						<p
							style={{
								color: 'white',
								fontSize: '22px',
								textDecoration: 'none',
							}}
						>
							After clicking on a box click here.
						</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
