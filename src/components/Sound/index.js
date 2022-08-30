import React from 'react'
import ringer from './happyBirthdayMusic.mp3'
import audioImg from './volume.svg'

const Music = () => {
	const audio = new Audio(ringer)
	audio.loop = true
	return (
		<>
			<div>
				<button
					onClick={() => {
						audio.loop = true
						audio.play()
					}}
				>
					<img src={audioImg} alt='audio immg' />
				</button>
			</div>
		</>
	)
}

export default Music
