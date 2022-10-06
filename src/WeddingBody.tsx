import React from 'react';
import Slider from "react-slick";
import './WeddingBody.css';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import Gallery from './component/gallery/gallery';
import GridGallery from './component/gallery/gridGallery';
import { CardMedia } from '@mui/material';

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

    settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    render(): React.ReactNode {

        return (
            <>
            <section className="couple" id="couple">
                <div className="container">
                    <h2 className="s-title text--colored">Tụi Mình</h2>
                    <div className="couple__groom">
                        <div className="couple__image couple__image-groom--left border--colored"></div>
                        <div className="couple__text couple__text--right">
                            <div className="couple__text-head text--colored">
                                <h3 className="couple__title text--colored">Quang</h3>
                                <span className="couple__subtitle text--colored">the Groom</span>
                            </div>
                            <div className="couple__text-body">
                                <p className="couple__descr">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name. </p>
                                <p className="couple__descr">I got this amazing feeling as soon as I saw her and it lives with me every day and I promise that the bunny outfit had nothing to do with it. Needless to say it turned into a very expensive night out</p>
                            </div>
                        </div>
                    </div>
                    <div className="couple__bride">
                        <div className="couple__image couple__image-bride--right border--colored"></div>
                        <div className="couple__text couple__text--left">
                            <div className="couple__text-head text--colored">
                            <h3 className="couple__title text--colored">Nhi</h3><span className="couple__subtitle text--colored">the Bride</span>
                            </div>
                            <div className="couple__text-body">
                            <p className="couple__descr">Jeremy and I have absolutely no hobbies or interests in common at all!  I fact, we're pretty much complete opposites! But who needs stuff in common? It's over-rated!  </p>
                            <p className="couple__descr">More importantly, we have the same life goals, the same priorities, the same attitudes to people and money and work and the same sense of what's right and wrong in life.  We say that we're soul mates and over the last 7 years I feel like we've become adults together and somehow shaped each other into becoming better people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="story1" id="story">
                <div className="container">
                    <h2 className="s-title text--colored"> Câu Chuyện Tụi Mình</h2>
                    <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                        <div className="story__slider-image">
                            <CardMedia width="100%" height="440" playsInline autoPlay loop muted controls component='video' image='https://nqwedding.s3.ap-southeast-1.amazonaws.com/img_bienhinh.png' src='https://nqwedding.s3.ap-southeast-1.amazonaws.com/bienhinh.MP4'/>
                        </div>
                        <div>
                            <div className="story__slider-text">
                                < p className="story__slider-descr">Năm 18 tuổi, tụi mình cùng nhau tốt nghiệp học sinh cuối cấp.</p>
                            </div>
                            <div className="story__slider-text">
                                <p className="story__slider-descr">Năm 26 tuổi, tụi mình cùng nhau tốt nghiệp học sinh cuối cấp.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="story" id="story">
                <div className="container">
                    <Slider className='story__slider' {...this.settings}>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="story__slider-image img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/gapnhau1.JPG" alt=""/></div>
                            <div className="story__slider-text">
                            <div className="slider__head-text text--colored"> 
                                <h3 className="couple__title text--colored"> 10.08.2012: TỤI MÌNH GẶP NHAU</h3>
                            </div>
                            <p className="story__slider-descr">Nhi là học sinh mới chuyển vào lớp, ngày đầu tiên vừa bước vào, mọi người vỗ tay ầm ầm, Nhi ngại nên đã đi thẳng ra ngoài, sau đó 2 năm học chung thì tụi mình rất mờ nhạt trong mắt nhau :)))</p>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="story__slider-image img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/quennhau.JPG" alt=""/></div>
                            <div className="story__slider-text">
                            <div className="slider__head-text text--colored"> 
                                <h3 className="couple__title text--colored"> 27.05.2014: TỤI MÌNH QUEN NHAU</h3>
                            </div>
                            <p className="story__slider-descr">Sau 3 lần Quang hỏi cùng 1 câu hỏi, thì tụi mình quen nhau vậy thôi, đến giờ vẫn không hiểu tại sao :))</p>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="story__slider-image img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/totnghiep.JPG" alt=""/></div>
                            <div className="story__slider-text">
                            <div className="slider__head-text text--colored"> 
                                <h3 className="couple__title text--colored"> 2019: TỤI MÌNH TỐT NGHIÊP</h3>
                            </div>
                            <p className="story__slider-descr">Dù tụi mình học 2 trường đại học khác nhau, nhưng may mắn vẫn chung Làng đại học và cùng chung tuyến xe buýt. Sau mấy năm trời chở nhau đi học, chờ nhau ở bến xe thì tụi mình cũng tốt nghiệp.</p>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image">
                            <video poster="PATH-TO-STILL-IMAGE" autoPlay width="100%" height="440" loop muted>
                                <source src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/conhanvideo.mp4" type="video/mp4"/>

                            </video>
                            </div>
                            <div className="story__slider-text">
                                <div className="slider__head-text text--colored"> 
                                    <h3 className="couple__title text--colored"> 04.06.2022: TỤI MÌNH CÓ NHẪN</h3>
                                </div>
                                <p className="story__slider-descr">Đây là chiếc nhẫn đầu tiên và bó hoa đầu tiên Nhi được Quang tặng. Đó là hôm 8 năm 8 ngày tụi mình quen nhau, Quang nói số 8 khi nằm ngang là tượng trưng cho vô hạn, vĩnh cữu (add hình infinity dô dùm tui) nên muốn tụi mình cũng được như vậy. Lẽ ra ở tầng 88 sẽ đẹp hơn, nhưng Landmark chỉ có 81 tầng thoi, nên xài tạm tầng 77 vậy

Nhắc lại món quà sinh nhật đầu tiên Nhi được tặng, là 1 cái bồn cầu đồ chơi bằng nhựa, xin nhắc lại là 1 cái bồn cầu thật ạ và lời chúc: “chúc ăn nhiều mau lớn to khỏe như siêu nhân”</p>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="story__slider-image img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/groom.jpg" alt=""/></div>
                            <div className="story__slider-text">
                            <div className="slider__head-text text--colored"> 
                                <h3 className="couple__title text--colored"> 25.12.2022 - 30.12.2022: TỤI MÌNH ĐÁM CƯỚI NÈ</h3>
                            </div>
                            <p className="story__slider-descr">Không hẹn, không sắp đặt mà nó lại vào một ngày Noel và cuối năm tất bật, mong là mọi người sẽ chúc phúc cho tụi mình thiệt nhiều, dù là có mặt hay không thể đến dự, tụi mình luôn rất trân trọng. Đó cũng sẽ là những kỷ niệm khó quên, và sẽ đi cùng với Quang và Nhi cho đến suốt cuộc đời.
Vậy là, bọn mình sắp cưới nhau, và sẽ cùng nhau bắt đầu một khởi đầu mới, hạnh phúc bên cạnh nhau!</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

            <section className="repair" id="repair">
                <div className="container">
                    <h2 className="s-title text--colored"> Chuẩn bị</h2>
                    <div >
                        <GridGallery/>
                    </div>

                </div>
            </section>

            <section className="photos" id="photos">
                <div className="container">
                    <h2 className="s-title text--colored"> Hành Trình 8 Năm Của Tụi Mình</h2>
                    <Gallery/>
                </div>
            </section>

            <section className="photos" id="photos">
                <div className="container">
                    <h2 className="s-title text--colored"> Hình Cưới Tụi Mình</h2>
                    <Gallery/>
                </div>
            </section>
            
            <section className="venues" id="venues">
                <div className="container">
                    <h2 className="s-title text--colored"> Địa Điểm</h2>
                    <div className="container-sm">
                    <div className="venues__ceremony">
                        <div className="ceremony__card venues__card border--colored">
                        <div className="venues__card-head text--colored"> 
                            <h3 className="venues__card-title text--colored"> Wedding Ceremony</h3>
                        </div>
                        <div className="venues__card-info">
                            <div className="venues__card-block">
                                <span className="venues__card-label mrg">Vào lúc</span>
                                <span className="venue__card-data">17:30, Ngày 5 tháng 12, 2022</span>
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
                            <h3 className="venues__card-title text--colored"> Wedding Ceremony</h3>
                        </div>
                        <div className="venues__card-info">
                            <div className="venues__card-block">
                                <span className="venues__card-label mrg">Vào lúc</span>
                                <span className="venue__card-data">18:00, Ngày 30 tháng 12, 2022</span>
                            </div>
                            <div className="venues__card-block">
                                <span className="venues__card-label">Tại</span>
                                <span className="venue__card-data">Sảnh Gloria – Tầng 12, 284 - 286 Vườn Lài, phường Phú Thọ Hòa, quận Tân Phú, TP.HCM</span>
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
            </>
        )
    }
}