
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ModalImgProbs {
    urlImg: string;
    setShowModal: any;
    title: string;
    fullscreen?: boolean;
    desc?: string;
}

export default function ModalImage(probs: ModalImgProbs) {
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(true);
    const { urlImg, setShowModal, title, desc } = probs;  

    function handleShow(breakpoint: any) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
        <Modal show={show} fullscreen onHide={() => { setShow(false); setShowModal(false) }}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                    <img className="img-responsive" style={{ paddingBottom: '20px'}} src={urlImg} alt=""/>
                    <div className='couple__subtitle'>
                        {title}
                    </div>
                    <div className='couple__descr'>
                        {desc}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        </>
    );
}