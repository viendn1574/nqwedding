
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ModalImgProbs {
    urlImg: string;
    setShowModal: any;
    title: string;
    fullscreen?: boolean;
}

export default function ModalImage(probs: ModalImgProbs) {
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(true);
    const { urlImg, setShowModal, title } = probs;  

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
                <div className='d-flex justify-content-center'>
                    <img className="img-responsive" src={urlImg} alt=""/>
                </div>
            </Modal.Body>
        </Modal>
        </>
    );
}