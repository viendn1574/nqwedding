import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import { useState } from 'react';
import ModalImage from '../modalImg/modalImg';
interface RepairCardProns {
    title: string;
    desc: string;
    urlImg: string;
    onClick: any;
}
function RepairCard(probs: RepairCardProns) {
    const {title, desc, urlImg, onClick} = probs;
    return (
		<>
            <div className='repair_card d-flex flex-column align-items-center text-center' onClick={()=> {onClick(title, desc , urlImg)}}>
                <img className="repair_card_img" src={urlImg} alt=""/>
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
	const [showFancy, setShowFancy] = useState(false);
	
	// The eventsListener will notify you anytime something has happened in the gallery.
	const repairCardOnclick = (title: string, desc: string, urlImg: string) => {
			setShowFancy(true);
			setimgUrl(urlImg);
			setTitleImg(title)
            setDescImg(desc)
	}


	// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
	const scrollingElement = window;

	return (
		<>
		{ showFancy && <ModalImage urlImg={imgUrl} setShowModal={setShowFancy} title={titleImg} desc={descImg}/> }
		<div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 justify-content-center">
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard title='Thử váy cưới' desc='An và Trúc dắt mình đi thử váy linh tinh. Mình hông chọn vì cái váy này làm mình mập =)) ' urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi_vaycuoi.JPG' onClick={repairCardOnclick}/></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard title='Thử váy cưới' desc='An và Trúc dắt mình đi thử váy linh tinh. Mình hông chọn vì cái váy này làm mình mập =)) ' urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/groom.jpg' onClick={repairCardOnclick} /></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard title={''} desc={''} urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/groom.jpg' onClick={repairCardOnclick}/></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard title={''} desc={''} urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/groom.jpg' onClick={repairCardOnclick}/></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard title={''} desc={''} urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/groom.jpg' onClick={repairCardOnclick}/></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard title={''} desc={''} urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/groom.jpg' onClick={repairCardOnclick}/></div>
        </div>
        </>
	);
}