import './styles.css'
import gift_doorstep from '../../Assets/cartoonImages/doorstep.jpeg'
import { Link } from 'react-router-dom'

const GiftOpening = () => {
	return (
		<div className='container gifts-wrapper'>
			<div className='row'>
				<div className='col-12'>
					<h3 className='text-center text-light my-5'>
						<strong>Hover the box</strong>
					</h3>
				</div>
				<div className='col-12 mt-5 d-flex justify-content-center'>
					<div className='box'>
						on your door step
						<div className='box-body'>
							<Link to='gallery'>
								<img
									className='img mx-5'
									src={gift_doorstep}
									alt='gift_doorstep'
									height='240px'
								/>
							</Link>
							<div className='box-lid'>
								<div className='box-bowtie' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GiftOpening
