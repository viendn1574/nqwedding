import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import { useState } from 'react';
import ModalImage from '../modalImg/modalImg';

export default function Gallery() {
	// Add your images here...
	const [imgUrl, setimgUrl] = useState('');
	const [titleImg, setTitleImg] = useState('');
	const [showFancy, setShowFancy] = useState(false);
	
	const items = [
		{ // Image item:
			itemId: '8nam1',
			mediaUrl: 'https://nqwedding.s3.ap-southeast-1.amazonaws.com/8nam_2.JPG',
			metaData: {
				type: 'image',
				height: 100,
				width: 100,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'https://nqwedding.s3.ap-southeast-1.amazonaws.com/8nam_2.JPG',
					target: '_blank'
				},
			}
		},
		{ // Another Image item:
			itemId: '8nam2',
			mediaUrl: 'https://nqwedding.s3.ap-southeast-1.amazonaws.com/8nam_4.JPG',
			metaData: {
				type: 'image',
				height: 100,
				width: 100,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'http://example.com',
					target: '_blank'
				},
			}
		},
        { // Another Image item:
			itemId: '8nam3',
			mediaUrl: 'https://nqwedding.s3.ap-southeast-1.amazonaws.com/8nam_9.JPG',
			metaData: {
				type: 'image',
				height: 300,
				width: 200,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'http://example.com',
					target: '_blank'
				},
			}
		},
        { // Another Image item:
			itemId: '8nam4',
			mediaUrl: 'https://nqwedding.s3.ap-southeast-1.amazonaws.com/8nam_11.JPG',
			metaData: {
				type: 'image',
				height: 300,
				width: 200,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'http://example.com',
					target: '_blank'
				},
			}
		},
        { // Another Image item:
			itemId: '8nam5',
			mediaUrl: 'https://nqwedding.s3.ap-southeast-1.amazonaws.com/8nam_10.JPG',
			metaData: {
				type: 'image',
				height: 100,
				width: 200,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'http://example.com',
					target: '_blank'
				},
			}
		},
        { // Another Image item:
			itemId: '8nam6',
			mediaUrl: 'https://nqwedding.s3.ap-southeast-1.amazonaws.com/8nam_10.JPG',
			metaData: {
				type: 'image',
				height: 100,
				width: 200,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'http://example.com',
					target: '_blank'
				},
			}
		},
	]

	// The options of the gallery (from the playground current state)
	const options = {
		galleryLayout: -1,
	};

	// The size of the gallery container. The images will fit themselves in it
	const container = {
		width: window.innerWidth,
		height: 500,
	};

	// The eventsListener will notify you anytime something has happened in the gallery.
	const eventsListener = (eventName: any, eventData: any) => {
		if (eventName === 'ITEM_ACTION_TRIGGERED' || eventName === 'ITEM_CLICKED') {
			setShowFancy(true);
			setimgUrl(eventData.url);
			setTitleImg(eventData.title)
		}
	}


	// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
	const scrollingElement = window;

	return (
		<>
		{ showFancy && <ModalImage urlImg={imgUrl} setShowModal={setShowFancy} title={titleImg} /> }
		<ProGallery
			items={items}
			options={options}
			container={container}
			eventsListener={eventsListener}
			scrollingElement={scrollingElement}
		/>
		</>
	);
}