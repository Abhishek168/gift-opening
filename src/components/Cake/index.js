import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import image1 from '../../Assets/cartoonImages/img5.png'

const Cake = () => {
	return (
		<>
			<div className='cake-wrapper'>
				<img src={image1} alt='image'></img>
				<div className='cake'>
					<div className='plate' />
					<div className='layer layer-bottom' />
					<div className='layer layer-middle' />
					<div className='layer layer-top' />
					<div className='icing' />
					<div className='drip drip1' />
					<div className='drip drip2' />
					<div className='drip drip3' />
					<div className='candle'>
						<div className='flame' />
					</div>
				</div>
				<Link to='jumpingGift'>
					<p
						style={{
							color: 'white',
							fontSize: '22px',
							display: 'flex',
							justifyContent: 'flex-end',
							pointerEvents: 'none',
						}}
					>
						Blow your candle click here
						<br />
					</p>
				</Link>
			</div>
		</>
	)
}

export default Cake
