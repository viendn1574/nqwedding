import moment from 'moment';
import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export class WeddingHeader extends React.Component {
    private navLinkRef

    constructor(props: any) {
        super(props);
        this.navLinkRef = {
            home: React.createRef<HTMLAnchorElement>(),
            couple: React.createRef<HTMLAnchorElement>(),
            story: React.createRef<HTMLAnchorElement>(),
            prepair: React.createRef<HTMLAnchorElement>(),
            photos: React.createRef<HTMLAnchorElement>(),
            venues: React.createRef<HTMLAnchorElement>(),
        }
    }

    state = {
        months: undefined,
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };
    interval: any = undefined;
    componentDidMount() {
        (document?.getElementById('audio') as any)?.play();
        this.interval = setInterval(() => {
            const then = moment("25122022180000", "DDMMYYYYhhmmss");
            const now = moment();
            const countdown = moment(then.valueOf() - now.valueOf());
            const months = countdown.format('MM');
            const days = countdown.format('DD');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');
            this.setState({ months, days, hours, minutes, seconds });
        }, 1000);
    }
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    scrollTo(ref: React.RefObject<HTMLAnchorElement>) {
        setTimeout(() => {
            ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    
    render(): React.ReactNode {
        const { months, days, hours, minutes, seconds } = this.state;
        if (!seconds) {
            return null;
        }
        return (
            <header>
                <span>TESTTTTTTTTTTTTTTTTTT</span>
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
                        <Nav.Link className='header__menu-link' onClick={(e) => this.scrollTo(this.navLinkRef.couple)} ref={this.navLinkRef.couple} href="/#couple">TỤI MÌNH</Nav.Link>
                        <Nav.Link className='header__menu-link' onClick={(e) => this.scrollTo(this.navLinkRef.story)} ref={this.navLinkRef.story} href="/#story">CÂU CHUYỆN</Nav.Link>
                        <Nav.Link className='header__menu-link' onClick={(e) => this.scrollTo(this.navLinkRef.prepair)} ref={this.navLinkRef.prepair} href="/#repair">CHUẨN BỊ</Nav.Link>
                        <Nav.Link className='header__menu-link' onClick={(e) => this.scrollTo(this.navLinkRef.photos)} ref={this.navLinkRef.photos} href="/#photos">HÌNH TỤI MÌNH</Nav.Link>
                        <Nav.Link className='header__menu-link' onClick={(e) => this.scrollTo(this.navLinkRef.venues)} ref={this.navLinkRef.venues} href="/#venues">ĐỊA ĐIỂM</Nav.Link>
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
                                            <h1 className="header-title">Quang & Nhi</h1>
                                            <span className="header-subtitle">Vậy là tụi mình cưới nhau <br/> 25.12.2022 <br/> 30.12.2022 </span>                                         
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
                    <p className="countdown__title text--colored">Cùng <strong>đếm</strong> ngược nào</p>
                    <div className="countdown__block countdown">
                        <div className="countdown__element countdown__month border--colored"> 
                            <span className="count month text--colored">{months}</span><br/>
                            <span className="label month_ref text--colored">Tháng</span>
                        </div>
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
                    </div>
                    <audio
                        loop
                        autoPlay
                        controls
                        style={{paddingTop:'10px'}}
                        src="https://nqwedding.s3.ap-southeast-1.amazonaws.com/Roi+Toi+Luon+-+Nal.mp3">
                            <source src='https://nqwedding.s3.ap-southeast-1.amazonaws.com/Roi+Toi+Luon+-+Nal.mp3'/>
                            <a href="https://nqwedding.s3.ap-southeast-1.amazonaws.com/Roi+Toi+Luon+-+Nal.mp3">
                                Download audio
                            </a>
                    </audio>
                </div>
            </header>
        )
    }
}