import React from 'react';
import Slider from "react-slick";
import './WeddingBody.css';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import Button from 'react-bootstrap/Button';
import Gallery from './component/gallery/gallery';
import GridGallery from './component/gallery/gridGallery';

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <Button
        className='slick-arrow-right'
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <Button
        className='slick-arrow-left'
        onClick={onClick}
      />
    );
  }

export class WeddingBody extends React.Component {

    settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    render(): React.ReactNode {

        return (
            <>
            <section className="couple" id="couple">
                <div className="container">
                    <h2 className="s-title text--colored">Happy Couple</h2>
                    <div className="couple__groom">
                        <div className="couple__image couple__image-groom--left border--colored"></div>
                        <div className="couple__text couple__text--right">
                            <div className="couple__text-head text--colored">
                                <h3 className="couple__title text--colored">Jeremy</h3>
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
                            <h3 className="couple__title text--colored">Diana</h3><span className="couple__subtitle text--colored">the Bride</span>
                            </div>
                            <div className="couple__text-body">
                            <p className="couple__descr">Jeremy and I have absolutely no hobbies or interests in common at all!  I fact, we're pretty much complete opposites! But who needs stuff in common? It's over-rated!  </p>
                            <p className="couple__descr">More importantly, we have the same life goals, the same priorities, the same attitudes to people and money and work and the same sense of what's right and wrong in life.  We say that we're soul mates and over the last 7 years I feel like we've become adults together and somehow shaped each other into becoming better people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="story" id="story">
                <div className="container">
                    <h2 className="s-title text--colored"> Love Story</h2>
                    <Slider className='story__slider' {...this.settings}>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="story__slider-image img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/groom.jpg" alt=""/></div>
                            <div className="story__slider-text">
                            <div className="slider__head-text text--colored"> 
                                <h3 className="couple__title text--colored"> How We Met</h3>
                            </div>
                            <p className="story__slider-descr">How we met is an unlikely funny story! Three years ago he tweeted that he was moving and had a bunch of horror DVD’s he needed to get rid of. At the time we didn’t follow each other, so a mutual friend responded to his tweet and included me in on it.</p>
                            </div>
                        </div>
                        <div className="story__slide" style={{width: '100%', display: 'inline-block'}}>
                            <div className="story__slider-image"><img className="story__slider-image img-responsive" src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/groom.jpg" alt=""/></div>
                            <div className="story__slider-text">
                            <div className="slider__head-text text--colored"> 
                                <h3 className="couple__title text--colored"> How We Met</h3>
                            </div>
                            <p className="story__slider-descr">How we met is an unlikely funny story! Three years ago he tweeted that he was moving and had a bunch of horror DVD’s he needed to get rid of. At the time we didn’t follow each other, so a mutual friend responded to his tweet and included me in on it.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="photos" id="photo">
                <div className="container">
                    <h2 className="s-title text--colored"> Our Photos</h2>
                    <Gallery/>
                </div>
            </section>

            <section className="venues" id="venues">
                <div className="container">
                    <h2 className="s-title text--colored"> Venues</h2>
                    <div className="container-sm">
                    <div className="venues__ceremony">
                        <div className="ceremony__card venues__card border--colored">
                        <div className="venues__card-head text--colored"> 
                            <h3 className="venues__card-title text--colored"> Wedding Ceremony</h3>
                        </div>
                        <div className="venues__card-info">
                            <div className="venues__card-block"><span className="venues__card-label mrg">When</span>
                            <time className="venues__card-data">11:30, May 16th, 2020</time>
                            </div>
                            <div className="venues__card-block"><span className="venues__card-label">Where</span><span className="venue__card-data">Saint Thomas Church Fifth Avenue 1 W 53rd St, New York, NY 10019</span></div>
                        </div>
                        <a className="venues__card-link" href="#">See on map</a>
                        </div>
                        <div className="address__map-container--left address__map">
                            <div className="address__map--ceremony map" id="address__map--ceremony">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.838231688447!2d106.69901301474866!3d10.746947992341525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fbfac598f1d%3A0x4f93c41dae417dc0!2sMaiSon%20de%20Charme%20-%20Restaurant%20%26%20Events!5e0!3m2!1sen!2sbg!4v1664899888640!5m2!1sen!2sbg" style={{border:0 , width:'100%', height: '100%'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="repair" id="repair">
                <div className="container">
                    <h2 className="s-title text--colored"> Repair</h2>
                    <div >
                        <GridGallery/>
                    </div>

                </div>
            </section>
            </>
        )
    }
}