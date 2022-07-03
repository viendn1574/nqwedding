import moment from 'moment';
import React from 'react';
import './header.css';

export class WeddingHeader extends React.Component {
    state = {
        months: undefined,
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };
    interval: any = undefined;
    componentDidMount() {
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
    
    render(): React.ReactNode {
        const { months, days, hours, minutes, seconds } = this.state;
        if (!seconds) {
            return null;
        }
        return (
            <header>
                <div className='position-absolute w-100'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                        <div className="container-fluid ">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#navbarExample01"
                                aria-controls="navbarExample01"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarExample01">
                                <ul className="navbar-nav container mx-auto mb-2 mb-lg-0 ">
                                <li className="nav-item active">
                                    <a className="header__menu-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="header__menu-link" href="#">Happy couple</a>
                                </li>
                                <li className="nav-item">
                                    <a className="header__menu-link" href="#">Love story</a>
                                </li>
                                <li className="nav-item">
                                    <a className="header__menu-link" href="#">Our photo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="header__menu-link" href="#">Venuses</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="text-center bg-image image-header">
                    <div className="mask mask2 h-100">
                        <div className="h-100 d-flex flex-column">
                            <div className="row row-empty"></div>
                            <div className="row row-heigh">
                                <div className="col"></div>
                                <div className="col-8 border-lg">
                                    <div className="d-flex justify-content-center align-items-center h-100">
                                        <div className="text-white">
                                            <h1 className="header-title">Quang & Nhi</h1>
                                            <span className="header-subtitle">Are getting married <br/> september 25, 2022 </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col"></div>
                            </div>
                            <div className="row"></div>
                        </div>
                    </div>
                </div>
                <div className="header__countdown">
                    <p className="countdown__title text--colored">Countdown <strong>to</strong> Wedding Ceremony</p>
                    <div className="countdown__block countdown">
                        <div className="countdown__element countdown__month border--colored"> 
                            <span className="count month text--colored">{months}</span><br/>
                            <span className="label month_ref text--colored">month</span>
                        </div>
                        <div className="countdown__element countdown__days border--colored"> 
                            <span className="count days text--colored">{days}</span><br/>
                            <span className="label days_ref text--colored">days</span></div>
                        <div className="countdown__element countdown__hours border--colored">
                            <span className="count hours text--colored">{hours}</span><br/>
                            <span className="label hours_ref text--colored">hours</span>
                        </div>
                        <div className="countdown__element countdown__minutes border--colored"> 
                            <span className="count minutes text--colored">{minutes}</span><br/>
                            <span className="label minutes_ref text--colored">minutes</span>
                        </div>
                        <div className="countdown__element countdown__seconds border--colored"> 
                            <span className="count seconds text--colored">{seconds}</span><br/>
                            <span className="label seconds_ref text--colored">seconds </span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}