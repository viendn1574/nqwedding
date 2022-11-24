import { useState } from 'react';
import ModalImage from '../modalImg/modalImg';
interface RepairCardProns {
    title: string;
    desc: string;
    urlImg: string;
    urlImgSrc?: string;
    onClick: any;
    type: string;
    posterVideo?: string;
}
function RepairCard(probs: RepairCardProns) {
    const {title, desc, urlImg, onClick, type, urlImgSrc, posterVideo} = probs;
    const imgURL = urlImgSrc === undefined || urlImgSrc === '' || urlImgSrc === null ? urlImg : urlImgSrc;
    return (
		<>
            <div className='repair_card d-flex flex-column align-items-center text-center' onClick={()=> {onClick(type, title, desc , imgURL)}}>
                {type === 'image' && <img className="repair_card_img" src={urlImg} alt=''/>}
                {type === 'video' && <video className="repair_card_img" playsInline autoPlay loop muted controls src={urlImg} poster={posterVideo ?? ''}/>}
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

	return (
		<>
		{ showFancy && <ModalImage type={type} urlImg={imgUrl} setShowModal={setShowFancy} title={titleImg} desc={descImg}/> }
		<div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 justify-content-center">
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard type='image' title='Thử váy cưới' desc='' urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi_ava/chuanbi+(5).jpg' urlImgSrc='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi/chuanbi+(5).jpg' onClick={repairCardOnclick}/></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard type='image' title='May đầm cưới' desc='' urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi_ava/chuanbi+(2).jpg' urlImgSrc='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi/chuanbi+(2).JPG' onClick={repairCardOnclick} /></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard type='image' title={'Chọn vest'} desc={''} urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi_ava/chuanbi+(3).jpeg' urlImgSrc='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi/chuanbi+(3).JPG' onClick={repairCardOnclick}/></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard type='image' title={'Chọn nhà hàng'} desc={''} urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi_ava/chuanbi+(4).jpeg' urlImgSrc='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi/chuanbi+(4).JPG' onClick={repairCardOnclick}/></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard type='image' title={'Thử áo dài'} desc={''} urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi_ava/chuanbi+(1).jpg' urlImgSrc='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi/chuanbi+(1).jpg' onClick={repairCardOnclick}/></div>
            <div className="d-flex justify-content-center col-lg-3 .col-md-3 col">
                <RepairCard type='video' title={'Gắn hoa làm thiệp '} desc={''} urlImg='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi_ava/chuanbi+(7).mp4' posterVideo='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi_ava/chuanbi+(7).jpg' onClick={repairCardOnclick}/></div>
        </div>
        </>
	);
}