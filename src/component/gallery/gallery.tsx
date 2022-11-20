import { Box, Button, ImageList, ImageListItem } from '@mui/material';
import { useState } from 'react';
import ModalImage from '../modalImg/modalImg';
import { PhotoType } from './Photo';
import { eightYearsPhotosLarge, eightYearsPhotosSmall, weddingPhotos, weddingPhotosLarge, weddingTPPhotos, weddingTPPhotosLarge } from './Photo.constants';

interface GalleryProps {
	type: PhotoType;
	enableShowMore : boolean;
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=cover&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
		size * rows
		}&fit=cover&auto=format&dpr=2 2x`,
	};
}

export default function Gallery(props: GalleryProps) {
	// Add your images here...
	const [imgUrl, setimgUrl] = useState('');
	const [titleImg, setTitleImg] = useState('');
	const [showFancy, setShowFancy] = useState(false);
	const { innerWidth: width } = window;

	const { type , enableShowMore} = props;
	const setImg = (e: any) => {
		let url:string = e.target.currentSrc;
		if (url.indexOf('weddingPhotos_ava_large') != -1) {
			url = url.replace('weddingPhotos_ava_large', 'weddingPhotos');
		} else if (url.indexOf('weddingPhotos_ava') != -1) {
			url = url.replace('weddingPhotos_ava', 'weddingPhotos');
		};

		if (url.indexOf('cuoiTP_ava_large') != -1) {
			url = url.replace('cuoiTP_ava_large', 'cuoiTP');
		} else if (url.indexOf('cuoiTP_ava') != -1) {
			url = url.replace('cuoiTP_ava', 'cuoiTP');
		};

		if (url.indexOf('8nam_ava_large') != -1) {
			url = url.replace('8nam_ava_large', '8nam');
		} else if (url.indexOf('8nam_ava') != -1) {
			url = url.replace('8nam_ava', '8nam');
		};

		setimgUrl(url);
		setTitleImg(e.target.alt);
		setShowFancy(true);
	}
	let items = [];
	if (width < 600) {
		items = type === PhotoType.EightYear ? eightYearsPhotosSmall : type === PhotoType.Wedding ? weddingPhotos : weddingTPPhotos;
	} else {
		items = type === PhotoType.EightYear ? eightYearsPhotosLarge : type === PhotoType.Wedding ? weddingPhotosLarge : weddingTPPhotosLarge;
	};
	const href = type === PhotoType.EightYear ? PhotoType.EightYear : PhotoType.Wedding;
	return (
		<>
			<Box sx={{
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
			}}>
				{showFancy && <ModalImage type='image' urlImg={imgUrl} setShowModal={setShowFancy} title={titleImg} />}
				<ImageList
					sx={{ width: '100%', height: 'auto', overflowY: 'unset' }}
					variant="quilted"
					cols={6}
					rowHeight={121}

				>
					{items.map((item) => (
						<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
							<img
								{...srcset(item.img, 121, item.rows, item.cols)}
								alt={item.title}
								loading="lazy"
								onClick={setImg}
							/>
						</ImageListItem>
					))}
				</ImageList>
				{enableShowMore && <Button
					sx={{
						marginTop: "20px"
					}}
					variant='outlined'
					color='secondary'
					href={`/photos/${href}`}
				>
					Show more
				</Button>}
			</Box>
		</>
	);
}