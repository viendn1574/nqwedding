
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from '@mui/material';
import { giftList } from './Gift.constant';
import Modal from 'react-bootstrap/Modal';
import './modalSendGift.css'
import { API } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
interface ModalSendGiftProbs {
    setShowModal: any;
}

const addGift = async (name: string, gift: string) => {
    giftList.push({name, gift});
    const id = uuidv4();
    const res = await API.post("giftapi","/gifts", {
        body: {
            id: `${id}`,
            name: name,
            gift: gift
        }
    });
}

export default function ModalSendGift(probs: ModalSendGiftProbs) {

    const [show, setShow] = useState(true);
    const [name, setName] = useState('');
    const [gift, setGift] = useState('');
    const { setShowModal } = probs;  

    return (
        <div >
        <Modal className='image-modal' show={show} onHide={() => { setShow(false); setShowModal(false) }} size='lg'>
            <Modal.Header closeButton style={{borderBottom:'0px'}}></Modal.Header>
            <Modal.Body>
                <div style={{paddingBottom: "10px"}}>
                    <span className='form-title-cs'>Hãy gửi những lời yêu thương </span>
                </div>
                <Form style={{width: '97%'}}>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-lable-cs'>Tên của bạn</Form.Label>
                        <Form.Control
                            maxLength= {50}
                            placeholder="Nguyễn Văn A"
                            onChange={(value) => {
                                setName(value.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-4"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label className='form-lable-cs'>Lời chúc</Form.Label>
                        <Form.Control
                            maxLength= {100}
                            onChange={(value) => {
                                setGift(value.target.value);
                            }}
                        />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer style={{borderTop:'0px'}}>
                <Button 
                    sx={{
						marginTop: "20px",
						color: "#7E3117",
                        backgroundColor: '#dfc188',
						borderColor: "#7E3117",
					}}
					variant='outlined'
					color='secondary' onClick={() => { 
                        setShow(false); 
                        setShowModal(false);
                        addGift(name, gift);
                    }}
                >
                    Gửi lời chúc nào !
                </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}