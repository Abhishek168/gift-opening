import './styles.css'

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
						<div className='box-body'>
							<img
								className='img mx-5'
								src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMTN2?wid=600&hei=346&fmt=jpeg&qlt=95&.v=1473703488187'
								alt='apple earphone'
							/>
							<div className='box-lid'>
								<div className='box-bowtie' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-12'>
					<h3 className='text-center text-light my-5'>
						<strong>Hover the box</strong>
					</h3>
				</div>
				<div className='col-12 mt-5 d-flex justify-content-center'>
					<div className='box'>
						<div className='box-body'>
							<img
								className='img'
								src='https://m.media-amazon.com/images/I/810Xa848VPL._AC_SX679_.jpg'
								alt='new im g data'
							/>
							<div className='box-lid'>
								<div className='box-bowtie' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-12'>
					<h3 className='text-center text-light my-5'>
						<strong>Hover the box</strong>
					</h3>
				</div>
				<div className='col-12 mt-5 d-flex justify-content-center'>
					<div className='box'>
						<div className='box-body'>
							<img
								className='img'
								alt='new im g data'
								height='346'
								width='743'
								src='https://m.media-amazon.com/images/I/51E1i8ZTp+L._AC_UY695_.jpg'
							/>
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
