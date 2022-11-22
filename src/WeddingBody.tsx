import React from 'react';
import Slider from "react-slick";
import './WeddingBody.css';
import config from './aws-exports'
// import required modules
import Gallery from './component/gallery/gallery';
import GridGallery from './component/gallery/gridGallery';
import { CardMedia, Snackbar } from '@mui/material';
import { PhotoType } from './component/gallery/Photo';
import { scroller } from "react-scroll";
import ModalSendGift from './component/modalSendGift/modalSendGift';
import { API } from 'aws-amplify';
import * as Amplify from 'aws-amplify';

Amplify.Amplify.configure(config);
function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        className='slick-arrow-right'
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        className='slick-arrow-left'
        onClick={onClick}
      />
    );
  }

export class WeddingBody extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            showSendGift : false,
            openSnackBar : false
        };
    
        this.setShowSendGift = this.setShowSendGift.bind(this);
    }

    state = {
        showSendGift : false,
        openSnackBar : false
    };
    
    indexGift = 0;
    giftList : any = [];
    settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    setShowSendGift(value: boolean) {
        this.setState({showSendGift: value})
    }
    interval: any = undefined;
    componentDidMount() {
        API.get("giftapi","/gifts",{}).then((gift) => {this.giftList = gift; console.log(gift)});
        this.interval = setInterval(() => {
            if (this.indexGift === this.giftList.length) {
                this.indexGift = 0;
            }
            this.setState({ openSnackBar: true });
        }, 6000);
        const urlParts = window.location.href.split('/');
        let sectionId = urlParts[urlParts.length - 1];
        if (sectionId === "") {
            return;
        }
        sectionId = sectionId.replace("#", "");
        scroller.scrollTo(
            sectionId,  
            {
                smooth: true,
                block: "start",
            }
        )
    }

    
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    render(): React.ReactNode {
        const {showSendGift} = this.state;
        return (
            <>
            <section className="couple" id="couple">
                <div className="container">
                    <h2 className="s-title text--colored">TỤI MÌNH</h2>
                    <div className="couple__groom">
                        <div className="couple__image couple__image-groom--left border--colored"></div>
                        <div className="couple__text couple__text--right">
                            <div className="couple__text-head text--colored">
                                <h3 className="couple__title text--colored">Xuân Quang</h3>
                                <span className="couple__subtitle text--colored">Chú Rể</span>
                            </div>
                            <div className="couple__text-body">
                            </div>
                        </div>
                    </div>
                    <div className="couple__bride">
                        <div className="couple__image couple__image-bride--right border--colored"></div>
                        <div className="couple__text couple__text--left">
                            <div className="couple__text-head text--colored">
                                <h3 className="couple__title text--colored">Hồng Nhi</h3>
                                <span className="couple__subtitle text--colored">Cô Dâu</span>
                            </div>
                            <div className="couple__text-body">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="image-dihoc-header" >
                <div className="mask mask2 h-100">
                    <div className="h-100 d-flex flex-column" style={{width:'93%'}}>
                        <div className="row row-empty"></div>
                        <div className="row row-heigh"></div>
                        <div className="row row-empty"></div>
                        <div className="row">
                            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                <div className="text-white d-flex flex-column justify-content-center align-items-center">
                                    <span className="header-subtitle-body">Năm 18 tuổi, tụi mình cùng nhau tốt nghiệp học sinh cuối cấp <br/> Năm 26 tuổi, tụi mình cùng nhau tốt nghiệp cuộc sống độc thân </span>                                         
                                    </div>
                            </div>
                        </div>
                        <div className="row row-empty"></div>
                    </div>
                </div>
            </div>
            
            <section className="story" id="story">
                <CardMedia width="100%" height="440" style={{paddingTop:'100px', paddingBottom:'0px'}} playsInline autoPlay loop muted controls component='video' poster='https://nqwedding.s3.ap-southeast-1.amazonaws.com/img_bienhinh.png' src='https://nqwedding.s3.ap-southeast-1.amazonaws.com/bienhinh.MP4'/>
                <div className="container">
                    <h2 className="s-title text--colored"> CÂU CHUYỆN CỦA TỤI MÌNH</h2>
                    <Slider className='story__slider' {...this.settings}>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/story/hinh1.jpg" alt=""/></div>
                            <div className="story__slider-text">
                                <div className="slider__head-text text--colored"> 
                                    <h3 className="couple__title text--colored"> 2012: TỤI MÌNH GẶP NHAU</h3>
                                </div>
                                <p className="story__slider-descr">Nhi là học sinh mới, chuyển vào lớp, ngày đầu tiên bước vào, mọi người vỗ tay ầm ầm, làm con nhỏ ngại đỏ mặt, chạy ra ngoài.</p>
                                <p className="story__slider-descr">Chắc đó là ấn tượng đầu tiên, sau đó 2 năm học chung thì tụi mình chỉ lướt qua nhau như người lạ.</p>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/story/hinh2.jpeg" alt=""/></div>
                            <div className="story__slider-text">
                                <p className="story__slider-descr">Hồi xưa Nhi hơi mập, nên Quang thích chọc “Nhi đô” , con nhỏ mặt thì dòm dữ mà ko hề dữ, quay lại đánh chỉ 1 cái rồi thôi :))))</p>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/story/hinh3.jpg" alt=""/></div>
                            <div className="story__slider-text">
                            <div className="slider__head-text text--colored"> 
                                <h3 className="couple__title text--colored"> 27.5.2014: QUEN NHAU</h3>
                            </div>
                            <p className="story__slider-descr">Sau 3 lần Quang hỏi cùng 1 câu hỏi, thì tụi mình quen nhau vậy thôi, đến giờ vẫn không hiểu tại sao :))</p>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/story/hinh4.jpg" alt=""/></div>
                            <div className="story__slider-text">
                            <div className="slider__head-text text--colored"> 
                                <h3 className="couple__title text--colored"> 2014-2018: CÙNG NHAU HỌC ĐẠI HỌC</h3>
                            </div>
                            <p className="story__slider-descr">Tụi mình học 2 trường đại học khác nhau, nhưng may mắn vẫn chung Làng đại học và chung tuyến xe buýt nên là vẫn cứ đi học cùng nhau.</p>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/story/hinh5.png" alt=""/></div>
                            <div className="story__slider-text">
                            <div className="slider__head-text text--colored"> 
                                <h3 className="couple__title text--colored"> 2019: TỤI MÌNH TỐT NGHIÊP</h3>
                            </div>
                            <p className="story__slider-descr">Rồi cứ vậy chở nhau đi học, chờ nhau ở bến xe buýt. Và cũng tốt nghiệp.</p>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/story/hinh6.jpg" alt=""/></div>
                            <div className="story__slider-text">
                                <div className="slider__head-text text--colored"> 
                                    <h3 className="couple__title text--colored"> RỒI ĐI LÀM</h3>
                                </div>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/story/hinh7.jpg" alt=""/></div>
                            <div className="story__slider-text">
                            <div className="slider__head-text text--colored"> 
                                <h3 className="couple__title text--colored"> 10.04.2022 : BA MẸ QUA NHÀ</h3>
                            </div>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/story/hinh8.JPG" alt=""/></div>
                            <div className="story__slider-text">
                            <div className="slider__head-text text--colored"> 
                                <h3 className="couple__title text--colored"> 04.06.2022: CÓ NHẪN NÈ</h3>
                            </div>
                            <p className="story__slider-descr">Đó là hôm 8 năm 8 ngày tụi mình quen nhau, Quang nói số 8 nằm ngang là tượng trưng cho vô hạn ∞ nên muốn tụi mình cũng được như vậy. Lẽ ra ở tầng 88 sẽ đẹp hơn, nhưng Landmark chỉ có 81 tầng thoi :)))</p>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/story/hinh9.jpg" alt=""/></div>
                            <div className="story__slider-text">
                            <p className="story__slider-descr">Đến tận lúc này mới được tặng bó hoa đầu tiên và chiếc nhẫn đầu tiên.</p>
                            <p className="story__slider-descr">Nhắc lại món quà sinh nhật đầu tiên Nhi được tặng, là 1 cái bồn cầu đồ chơi bằng nhựa, xin nhắc lại là 1 cái bồn cầu thiệt ạ và lời chúc: “chúc ăn nhiều mau lớn to khỏe như siêu nhân” </p>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/story/hinh10.jpg" alt=""/></div>
                            <div className="story__slider-text">
                            <div className="slider__head-text text--colored"> 
                                <h3 className="couple__title text--colored"> 25.12.2022 - 30.12.2022: TỤI MÌNH CƯỚI</h3>
                            </div>
                            <p className="story__slider-descr">Không hẹn, không sắp đặt mà nó lại vào một ngày Noel và cuối năm tất bật, mong là mọi người sẽ chúc phúc cho tụi mình thiệt nhiều, dù là có mặt hay không thể đến dự, tụi mình luôn rất trân trọng. Đó cũng sẽ là những kỷ niệm khó quên, và sẽ đi cùng tụi mình cho đến suốt cuộc đời.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

            <section className="repair" id="repair">
                <div className="container">
                    <h2 className="s-title text--colored"> CHUẨN BỊ</h2>
                    <h2 className="repair-subtitle">Cùng xem qua quá trình tụi mình chọn lựa và chuẩn bị cho đám cưới nha! </h2>
                    <CardMedia width="100%" height="440" playsInline autoPlay loop muted controls component='video' poster='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi_ava/thuvaycuoi.jpg' src='https://nqwedding.s3.ap-southeast-1.amazonaws.com/chuanbi/chuanbi+(6).mp4'/>
                    <div style={{paddingTop: '20px'}}>
                        <GridGallery/>
                    </div>

                </div>
            </section>

            <section className="photos" id="photos">
                <div className="container" >
                    <h2 className="s-title text--colored" style={{paddingBottom:'50px'}}> HÀNH TRÌNH 8 NĂM CỦA TỤI MÌNH</h2>
                    <Gallery enableShowMore type={PhotoType.EightYear}/>
                </div>
                <div className="container" style={{padding: '100px 0px 20px 0px'}}>
                    <h2 className="s-title text--colored"> HÌNH CƯỚI CỦA TỤI MÌNH</h2>
                    <h2 className="repair-subtitle">Ta sẽ yêu nhau đến già yêu đến khi thành ông bà <br/>
Mình bên nhau, ở bên nhau, cầm tay nhau <br/>
Mãi thương ❤
 </h2>
                    <div style={{padding: '20px 0px 40px 0px'}}><Gallery enableShowMore={false} type={PhotoType.Wedding}/></div>
                    <Gallery enableShowMore type={PhotoType.WeddingTP}/>
                </div>
            </section>
            
            <section className="venues" id="venues">
                <div className="container">
                    <h2 className="s-title text--colored">TA CÓ HẸN VỚI THÁNG 12 </h2>
                    <h2 className="repair-subtitle">Hãy mang theo những niềm vui và lời chúc phúc đến tiệc cưới của tụi mình nhé !</h2>
                    <div className="container-sm" style={{paddingTop: '30px'}}>
                    <div className="venues__ceremony">
                        <div className="ceremony__card venues__card border--colored">
                        <div className="venues__card-head text--colored"> 
                            <h3 className="venues__card-title text--colored">NHÀ GÁI</h3>
                        </div>
                        <div className="venues__card-info">
                            <div className="venues__card-block">
                                <span className="venues__card-label mrg">Vào lúc</span>
                                <span className="venue__card-data">17:30, Ngày 25 tháng 12, 2022</span>
                            </div>
                            <div className="venues__card-block">
                                <span className="venues__card-label">Tại</span>
                                <span className="venue__card-data">MAISON DE CHARME, Hẻm 793/57 Trần Xuân Soạn, Phường Tân Hưng, Quận 7, TP.HCM<br/></span>
                            </div>
                            <div className="venues__card-block" style={{paddingTop: '10px'}}>
                                <span className="venues__card-label">Dresscode</span>
                                <span className="venue__card-data">Vàng, cam, be, kem, nâu, đen.</span>
                            </div>
                        </div>
                        <a className="venues__card-link" href="https://www.google.com/maps?ll=10.746948,106.701202&z=16&t=m&hl=en&gl=BG&mapclient=embed&cid=5734142382329396672">See on map</a>
                        </div>
                        <div className="address__map-container--left address__map">
                            <div className="address__map--ceremony map" id="address__map--ceremony">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.838231688447!2d106.69901301474866!3d10.746947992341525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fbfac598f1d%3A0x4f93c41dae417dc0!2sMaiSon%20de%20Charme%20-%20Restaurant%20%26%20Events!5e0!3m2!1sen!2sbg!4v1664899888640!5m2!1sen!2sbg" style={{border:0 , width:'100%', height: '100%'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="container-sm">
                    <div className="venues__ceremony">
                        <div className="ceremony__card venues__card border--colored">
                        <div className="venues__card-head text--colored"> 
                            <h3 className="venues__card-title text--colored">NHÀ TRAI</h3>
                        </div>
                        <div className="venues__card-info">
                            <div className="venues__card-block">
                                <span className="venues__card-label mrg">Vào lúc</span>
                                <span className="venue__card-data">18:00, Ngày 30 tháng 12, 2022</span>
                            </div>
                            <div className="venues__card-block">
                                <span className="venues__card-label">Tại</span>
                                <span className="venue__card-data">ASIANA PLAZA - Sảnh Gloria – Tầng 12, 284 - 286 Vườn Lài, phường Phú Thọ Hòa, quận Tân Phú, TP.HCM</span>
                            </div>
                        </div>
                        <a className="venues__card-link" href="https://www.google.com/maps?ll=10.746948,106.701202&z=16&t=m&hl=en&gl=BG&mapclient=embed&cid=5734142382329396672">See on map</a>
                        </div>
                        <div className="address__map-container--left address__map">
                            <div className="address__map--ceremony map" id="address__map--ceremony">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3008737273503!2d106.623220914749!3d10.788252392313469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d9d5888fc19%3A0x172d76a84a0ca188!2zVHJ1bmcgdMOibSBo4buZaSBuZ2jhu4sgdGnhu4djIGPGsOG7m2kgQXNpYW5hIFBsYXphIChUw6JuIFBow7op!5e0!3m2!1sen!2s!4v1665053174644!5m2!1sen!2s" style={{border:0 , width:'100%', height: '100%'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {showSendGift && <ModalSendGift setShowModal={this.setShowSendGift}/>}
            <div data-id="donate-fab" id="call-to-donate" style={{bottom: '45px'}} onClick={ ()=> this.setShowSendGift(true)}>
                <a>
                    <div className="sticky-btn-wrapper">
                        <img src="https://static.namtay.vn/assets/img/front.png" alt="" className="sticky-btn-front"/>
                        <svg width="86" height="97" viewBox="0 0 86 97" fill="none" className="sticky-btn-opener">
                            <path d="M85 52.445V81.3185C85 82.3228 84.526 83.2357 83.7675 83.893C83.3693 84.2399 82.8763 84.532 82.3454 84.7146L81.9472 84.8424L45.5788 96.1078C43.9291 96.6191 42.1278 96.6191 40.4781 96.1078L4.10971 84.8607L3.6167 84.7146C3.10474 84.532 2.6307 84.2399 2.23251 83.9112C1.47404 83.2357 1 82.3228 1 81.3185V52.445C1 50.1262 2.95305 48.2456 5.36117 48.2456H43H80.6388C83.047 48.2456 85 50.1262 85 52.445Z" fill="#A5072D" stroke="#231F20" strokeMiterlimit="10"></path>
                        </svg>
                        <img src="https://static.namtay.vn/assets/img/back.png" alt="" className="sticky-btn-back"/> 
                        <img src="https://static.namtay.vn/assets/img/button.png" alt="" className="sticky-btn-button"/>
                        <img src="https://static.namtay.vn/assets/img/money1.png" alt="" className="sticky-btn-money1"/>
                        <img src="https://static.namtay.vn/assets/img/money2.png" alt="" className="sticky-btn-money2"/>
                        <img src="https://static.namtay.vn/assets/img/money3.png" alt="" className="sticky-btn-money3"/>
                    </div>
                </a>
            </div>
            { this.state.openSnackBar && <Snackbar
                autoHideDuration={3000}
                open
                ContentProps={{
                    sx: {
                        background: "white"
                    }
                }}
                message={
                    <div className='d-flex flex-column'>
                        <span style={{
                            fontFamily: 'Marcellus',
                            fontSize:'20px',
                            fontWeight:'200',
                            color: 'black'
                        }}> {this.giftList[this.indexGift].name} </span>
                        <span style={{
                                fontFamily: 'Marcellus',
                                fontSize:'15px',
                                fontWeight:'100',
                                color: 'black'
                        }}> {this.giftList[this.indexGift].gift} </span>
                    </div>
                }
                onClose={() => {this.setState({openSnackBar: false}); this.indexGift++;}}
            />}
            </>
        )
    }
}