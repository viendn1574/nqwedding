
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

interface ModalImgProbs {
    urlImg: string;
    setShowModal: any;
    title: string;
    fullscreen?: boolean;
    desc?: string;
    type: string
}

export default function ModalImage(probs: ModalImgProbs) {
    const [show, setShow] = useState(true);
    const { urlImg, setShowModal, title, desc, type } = probs;  

    return (
        <>
        <Modal show={show} fullscreen onHide={() => { setShow(false); setShowModal(false) }}>
            <Modal.Header closeButton>
            <Modal.Title className='couple__subtitle' style={{color: 'white' }}>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                    {type === 'image' && <img className="img-responsive" loading='lazy' style={{ paddingBottom: '20px'}} src={urlImg} alt=""/>}
                    {type === 'video' && <video className="img-responsive" style={{ paddingBottom: '20px'}} playsInline autoPlay loop muted controls preload='none' src={urlImg}/>}
                    <div className='couple__subtitle' style={{color: 'wheat' }}>
                        {title}
                    </div>
                    <div className='couple__descr' style={{color: 'white' }}>
                        {desc}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        </>
    );
}