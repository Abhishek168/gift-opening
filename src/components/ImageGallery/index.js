import './styles.css'
import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'

const MultipleImageGallery = () => {
	const [images, setImages] = React.useState(null)
	React.useEffect(() => {
		let shouldCancel = false

		const call = async () => {
			const response = [
				{
					original: 'https://i.ibb.co/19j1JFV/bday10.jpg',
					thumbnail: 'https://i.ibb.co/19j1JFV/bday10.jpg',
				},
				{
					original: 'https://i.ibb.co/FzKx4mX/bday1.jpg',
					thumbnail: 'https://i.ibb.co/FzKx4mX/bday1.jpg',
				},
				{
					original: 'https://i.ibb.co/7zn9kk5/bday3.jpg',
					thumbnail: 'https://i.ibb.co/7zn9kk5/bday3.jpg',
				},
				{
					original: 'https://i.ibb.co/NLnFsr2/bday6.jpg',
					thumbnail: 'https://i.ibb.co/NLnFsr2/bday6.jpg',
				},
				{
					original: 'https://i.ibb.co/SP16RHK/bday4.jpg',
					thumbnail: 'https://i.ibb.co/SP16RHK/bday4.jpg',
				},
				{
					original: 'https://i.ibb.co/gdB6yVy/bday5.jpg',
					thumbnail: 'https://i.ibb.co/gdB6yVy/bday5.jpg',
				},
				{
					original: 'https://i.ibb.co/ZfDBv4D/bday2.jpg',
					thumbnail: 'https://i.ibb.co/ZfDBv4D/bday2.jpg',
				},
				{
					original: 'https://i.ibb.co/YfGv8Jd/bday7.jpg',
					thumbnail: 'https://i.ibb.co/YfGv8Jd/bday7.jpg',
				},
				{
					original: 'https://i.ibb.co/VVRxLzL/bdau8.jpg',
					thumbnail: 'https://i.ibb.co/VVRxLzL/bdau8.jpg',
				},
				{
					original: 'https://i.ibb.co/55R6RTZ/IMAGE1j-OIN1.jpg',
					thumbnail: 'https://i.ibb.co/55R6RTZ/IMAGE1j-OIN1.jpg',
				},
				{
					original: 'https://i.ibb.co/LC7T2GT/bday9.jpg',
					thumbnail: 'https://i.ibb.co/LC7T2GT/bday9.jpg',
				},
				{
					original: 'https://i.ibb.co/NysnGQW/IMAGE1j-OIN2.jpg',
					thumbnail: 'https://i.ibb.co/NysnGQW/IMAGE1j-OIN2.jpg',
				},
				{
					original: 'https://i.ibb.co/68Q8Jq4/bday11.jpg',
					thumbnail: 'https://i.ibb.co/68Q8Jq4/bday11.jpg',
				},
				{
					original: 'https://i.ibb.co/MVrk3Sh/bday12.jpg',
					thumbnail: 'https://i.ibb.co/MVrk3Sh/bday12.jpg',
				},
				{
					original: 'https://i.ibb.co/6JpB3R3/bday13.jpg',
					thumbnail: 'https://i.ibb.co/6JpB3R3/bday13.jpg',
				},
			]
			if (!shouldCancel && response.length && response) {
				setImages(response)
			}
		}
		call()
		return () => (shouldCancel = true)
	}, [])

	return images ? (
		<div className='imagegalley-top'>
			<ImageGallery items={images} />{' '}
		</div>
	) : null
}

export default MultipleImageGallery
