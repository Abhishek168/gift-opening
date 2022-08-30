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
					original: 'https://i.postimg.cc/BLSSgkCX/702639.jpg',
					thumbnail: 'https://i.postimg.cc/BLSSgkCX/702639.jpg',
				},
				{
					original: 'https://i.postimg.cc/8JmFkLZr/wp4758025.jpg',
					thumbnail: 'https://i.postimg.cc/8JmFkLZr/wp4758025.jpg',
				},
			]
			if (!shouldCancel && response.length && response) {
				setImages(response)
			}
			// if (!shouldCancel && response.data && response.data.length > 0) {
			// 	setImages(
			// 		response.data.map((url) => ({
			// 			original: `${url}=w1024`,
			// 			thumbnail: `${url}=w100`,
			// 		})),
			// 	)
			// }
		}
		call()
		return () => (shouldCancel = true)
	}, [])

	return images ? <ImageGallery items={images} /> : null
}

export default MultipleImageGallery
