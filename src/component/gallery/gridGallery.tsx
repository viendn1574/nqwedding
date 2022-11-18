import { CardMedia } from '@mui/material';
import { useState } from 'react';
import ModalImage from '../modalImg/modalImg';
interface RepairCardProns {
    title: string;
    desc: string;
    urlImg: string;
    onClick: any;
    type: string;
}
function RepairCard(probs: RepairCardProns) {
    const {title, desc, urlImg, onClick, type} = probs;
    return (
		<>
            <div className='repair_card d-flex flex-column align-items-center text-center' onClick={()=> {onClick(type, title, desc , urlImg)}}>
                {type === 'image' && <img className="repair_card_img" src={urlImg}/>}
                {type === 'video' && <video className="repair_card_img" playsInline autoPlay loop muted controls src={urlImg}/>}
                <div className=' repair_card_title d-inline-block text-truncate'>
                    {title}
                </div>
                <div className=' repair_card_desc d-inline-block text-truncate'>
                    {desc}
                </div>
                
            </div>

        </>
	);
}

export default function GridGallery() {
	// Add your images here...
	const [imgUrl, setimgUrl] = useState('');
	const [titleImg, setTitleImg] = useState('');
    const [descImg, setDescImg] = useState('');
    const [type, setType] = useState('');
	const [showFancy, setShowFancy] = useState(false);
	
	// The eventsListener will notify you anytime something has happened in the gallery.
	const repairCardOnclick = (type: string, title: string, desc: string, urlImg: string) => {
			setShowFancy(true);
			setimgUrl(urlImg);
			setTitleImg(title);
            setDescImg(desc);
            setType(type);
	}


	// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
	const scrollingElement = window;

	return (
		<>
		{ showFancy && <ModalImage type={type} urlImg={imgUrl} setShowModal={setShowFancy} title={titleImg} desc={descImg}/> }
		<div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 justify-content-center">
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard type='image' title='Thử váy cưới' desc='An và Trúc dắt mình đi thử váy linh tinh. Mình hông chọn vì cái váy này làm mình mập =)) ' urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi+(5).png' onClick={repairCardOnclick}/></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard type='image' title='May đầm cưới' desc='An và Trúc dắt mình đi thử váy linh tinh. Mình hông chọn vì cái váy này làm mình mập =)) ' urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi+(2).JPG' onClick={repairCardOnclick} /></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard type='image' title={'Chọn vest'} desc={''} urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi+(3).JPG' onClick={repairCardOnclick}/></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard type='image' title={'Chọn nhà hàng'} desc={'Chọn nhà hàng'} urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi+(4).JPG' onClick={repairCardOnclick}/></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard type='image' title={'Thử áo dài'} desc={''} urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi+(1).jpg' onClick={repairCardOnclick}/></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard type='video' title={'Thử váy cưới '} desc={''} urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi+(6).mp4' onClick={repairCardOnclick}/></div>
        </div>
        </>
	);
}