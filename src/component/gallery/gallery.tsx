import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import { useState } from 'react';
import ModalImage from '../modalImg/modalImg';
import { items } from './Photo.constants';

export default function Gallery() {
	// Add your images here...
	const [imgUrl, setimgUrl] = useState('');
	const [titleImg, setTitleImg] = useState('');
	const [showFancy, setShowFancy] = useState(false);
	
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