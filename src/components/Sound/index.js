import React from 'react'
import ringer from './happyBirthdayMusic.mp3'
import photo2 from '../../Assets/cartoonImages/img8.png'

const Music = () => {
	const audio = new Audio(ringer)
	audio.loop = true
	return (
		<>
			<div className='container overflow-y:hidden'>
				<div className='row'>
					<div className='col-lg-3 col-sm-1'>
						<button
							onClick={() => {
								audio.loop = true
								audio.play()
							}}
							style={{ border: '0', background: 'pink' }}
						>
							<div className='d-flex justify-content-center align-items-center'>
								<img src={photo2} height='430px' alt='audio immg' />
								<div>
									Hello
									<img
										src={
											'https://ia802905.us.archive.org/8/items/clickme_202004/tapme.gif'
										}
										alt='audio immg'
										height='60px'
									/>
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Music
