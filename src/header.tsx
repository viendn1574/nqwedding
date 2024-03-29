import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { scroller } from "react-scroll";
export class WeddingHeader extends React.Component {

    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined,
        countdownDone: false,
    };
    interval: any = undefined;
    componentDidMount() {
        (document?.getElementById('audio') as any)?.play();
        this.interval = setInterval(() => {
            let then = new Date("December 25, 2022 18:00:00").getTime();
            let now = new Date().getTime();
            let countdown = then - now;
            let days = Math.floor(countdown / (1000 * 60 * 60 * 24));;
            let hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));;
            let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));;
            let seconds = Math.floor((countdown % (1000 * 60)) / 1000);
            if (days + hours + minutes + seconds < 0) {
                then = new Date("December 30, 2022 18:00:00").getTime();
                now = new Date().getTime();
                countdown = then - now;
                days = Math.floor(countdown / (1000 * 60 * 60 * 24));;
                hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));;
                minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));;
                seconds = Math.floor((countdown % (1000 * 60)) / 1000);
                if (days + hours + minutes + seconds < 0) { 
                    this.setState({countdownDone: true});
                } else {
                    this.setState({ days, hours, minutes, seconds });
                }

            } else {
                this.setState({ days, hours, minutes, seconds });
            }

        }, 1000);
    }
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    scrollTo(id: string) {
        scroller.scrollTo(
            id,  
            {
                smooth: true,
                block: "start",
            }
        )
    }
    
    render(): React.ReactNode {
        const { days, hours, minutes, seconds, countdownDone } = this.state;
        return (
            <header>
                <div className='position-absolute w-100'>
                <Navbar bg="transparent" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/logo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container mx-auto mb-2 mb-lg-0">
                        <Nav.Link className='header__menu-link' href="/">Home</Nav.Link>
                        <Nav.Link className='header__menu-link' onClick={() => this.scrollTo("couple")} href="/#couple">TỤI MÌNH</Nav.Link>
                        <Nav.Link className='header__menu-link' onClick={() => this.scrollTo("story")} href="/#story">CÂU CHUYỆN</Nav.Link>
                        <Nav.Link className='header__menu-link' onClick={() => this.scrollTo("repair")} href="/#repair">CHUẨN BỊ</Nav.Link>
                        <Nav.Link className='header__menu-link' onClick={() => this.scrollTo("photos")} href="/#photos">HÌNH TỤI MÌNH</Nav.Link>
                        <Nav.Link className='header__menu-link' onClick={() => this.scrollTo("venues")} href="/#venues">ĐỊA ĐIỂM</Nav.Link>
                     </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                </div>
                <div className="text-center bg-image image-header">
                    <div className="mask mask2 h-100">
                        <div className="h-100 d-flex flex-column">
                            <div className="row row-empty"></div>
                            <div className="row row-heigh">
                                <div className="col"></div>
                                <div className="col-8 border-lg">
                                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                        <div className="text-white d-flex flex-column justify-content-center align-items-center">
                                            <h1 className="header-title">Xuân Quang & Hồng Nhi</h1>
                                            <span className="header-subtitle">25.12.2022 <br/> 30.12.2022 </span>                                         
                                        </div>
                                    </div>
                                </div>
                                <div className="col"></div>
                            </div>
                            <div className="row"></div>
                        </div>
                    </div>
                </div>
                <div className="header__countdown d-flex flex-column justify-content-center align-items-center">
                    {!countdownDone && <p className="countdown__title text--colored">Vậy là tụi mình cưới nhau</p>}
                    {countdownDone && <p className="countdown__title_2 text--colored">Vậy là tụi mình thành vợ chồng</p>}
                    {!countdownDone && <div className="countdown__block countdown">
                        <div className="countdown__element countdown__days border--colored"> 
                            <span className="count days text--colored">{days}</span><br/>
                            <span className="label days_ref text--colored">Ngày</span></div>
                        <div className="countdown__element countdown__hours border--colored">
                            <span className="count hours text--colored">{hours}</span><br/>
                            <span className="label hours_ref text--colored">Tiếng</span>
                        </div>
                        <div className="countdown__element countdown__minutes border--colored"> 
                            <span className="count minutes text--colored">{minutes}</span><br/>
                            <span className="label minutes_ref text--colored">Phút</span>
                        </div>
                        <div className="countdown__element countdown__seconds border--colored"> 
                            <span className="count seconds text--colored">{seconds}</span><br/>
                            <span className="label seconds_ref text--colored">Giây </span>
                        </div>
                    </div>}
                    <audio
                        loop
                        autoPlay
                        controls
                        style={{paddingTop:'10px'}}
                        src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/secretlovesong.mp3">
                            <source src='https://nqwedding.s3.ap-southeast-1.amazonaws.com/secretlovesong.mp3'/>
                            <a href="https://nqwedding.s3.ap-southeast-1.amazonaws.com/secretlovesong.mp3">
                                Download audio
                            </a>
                    </audio>
                </div>
            </header>
        )
    }
}