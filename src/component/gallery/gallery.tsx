import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import { useState } from 'react';
import $ from 'jquery';
import ModalImage from '../modalImg/modalImg';

export default function Gallery() {
	// Add your images here...
	const [imgUrl, setimgUrl] = useState('');
	const [titleImg, setTitleImg] = useState('');
	const [showFancy, setShowFancy] = useState(false);
	
	const items = [
		{ // Image item:
			itemId: '1',
			mediaUrl: 'https://i.picsum.photos/id/674/200/300.jpg?hmac=kS3VQkm7AuZdYJGUABZGmnNj_3KtZ6Twgb5Qb9ITssY',
			metaData: {
				type: 'image',
				height: 100,
				width: 100,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'https://i.picsum.photos/id/674/200/300.jpg?hmac=kS3VQkm7AuZdYJGUABZGmnNj_3KtZ6Twgb5Qb9ITssY',
					target: '_blank'
				},
			}
		},
		{ // Another Image item:
			itemId: '2',
			mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
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
			itemId: '3',
			mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
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
			itemId: '4',
			mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
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
			itemId: '4',
			mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
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
			itemId: '5',
			mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
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
        { // Image item:
			itemId: '6',
			mediaUrl: 'https://i.picsum.photos/id/674/200/300.jpg?hmac=kS3VQkm7AuZdYJGUABZGmnNj_3KtZ6Twgb5Qb9ITssY',
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
	]

	// The options of the gallery (from the playground current state)
	const options = {
		galleryLayout: -1,
	};

	// The size of the gallery container. The images will fit themselves in it
	const container = {
		width: window.innerWidth,
		height: 300,
	};

	// The eventsListener will notify you anytime something has happened in the gallery.
	const eventsListener = (eventName: any, eventData: any) => {
		if (eventName === 'ITEM_ACTION_TRIGGERED') {
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