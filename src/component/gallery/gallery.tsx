import { Box, Button, ImageList, ImageListItem } from '@mui/material';
import { useState } from 'react';
import ModalImage from '../modalImg/modalImg';
import { PhotoType } from './Photo';
import { itemData, weddingPhotos } from './Photo.constants';

interface GalleryProps {
	type: PhotoType;
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

	const { type } = props;
	const setImg = (e: any) => {
		setimgUrl(e.target.currentSrc);
		setTitleImg(e.target.alt);
		setShowFancy(true);
	}
	const items = type === PhotoType.EightYear ? itemData : weddingPhotos;
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
				<Button
					sx={{
						marginTop: "3%"
					}}
					variant='outlined'
					color='secondary'
					href={`/photos/${type}`}
				>
					Show more
				</Button>
			</Box>
		</>
	);
}